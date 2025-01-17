package org.babyfish.jimmer.spring.client;

import org.babyfish.jimmer.client.meta.ApiService;
import org.babyfish.jimmer.client.meta.Schema;
import org.babyfish.jimmer.client.runtime.impl.MetadataBuilder;
import org.babyfish.jimmer.spring.cfg.JimmerProperties;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import java.io.*;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Collections;

@Controller
public class OpenApiUiController {

    private final JimmerProperties properties;

    public OpenApiUiController(JimmerProperties properties) {
        this.properties = properties;
    }

    @GetMapping("${jimmer.client.openapi.ui-path}")
    public ResponseEntity<StreamingResponseBody> download(
            @RequestParam(name = "groups", required = false) String groups
    ) {

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "text/html");
        StreamingResponseBody body = out -> {
            Writer writer = new OutputStreamWriter(out, StandardCharsets.UTF_8);
            String html = this.html(groups);
            writer.write(html);
            writer.flush();
        };
        return ResponseEntity.ok().headers(headers).body(body);
    }

    private String html(String groups) {
        String path = properties.getClient().getOpenapi().getPath();
        String resource;
        if (hasMetadata()) {
            resource = path != null && !path.isEmpty() ?
                    "META-INF/jimmer/openapi/index.html.template" :
                    "META-INF/jimmer/openapi/no-api.html";
        } else {
            resource = "META-INF/jimmer/openapi/no-metadata.html";
        }
        StringBuilder builder = new StringBuilder();
        char[] buf = new char[1024];
        InputStream inputStream = OpenApiController.class.getClassLoader().getResourceAsStream(resource);
        assert inputStream != null;
        try (Reader reader = new InputStreamReader(inputStream)) {
            int len;
            if ((len = reader.read(buf)) != -1) {
                builder.append(buf, 0, len);
            }
        } catch (IOException ex) {
            throw new AssertionError("Internal bug: Can read \"" + resource + "\"");
        }
        boolean isTemplate = resource.endsWith(".template");
        if (!isTemplate) {
            return builder.toString();
        }
        if (groups != null && !groups.isEmpty()) {
            try {
                path += "?groups=" + URLEncoder.encode(groups, "utf-8");
            } catch (UnsupportedEncodingException ex) {
                throw new AssertionError("Internal bug: utf-8 is not supported");
            }
        }
        return builder.toString().replace("${openapi.path}", path);
    }

    private boolean hasMetadata() {
        Schema schema = MetadataBuilder.loadSchema(Collections.emptySet());
        for (ApiService service : schema.getApiServiceMap().values()) {
            if (!service.getOperations().isEmpty()) {
                return true;
            }
        }
        return false;
    }
}
