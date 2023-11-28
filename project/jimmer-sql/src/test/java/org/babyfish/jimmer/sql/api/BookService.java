package org.babyfish.jimmer.sql.api;

import org.babyfish.jimmer.client.Api;
import org.babyfish.jimmer.client.FetchBy;
import org.babyfish.jimmer.sql.fetcher.Fetcher;
import org.babyfish.jimmer.sql.model.AuthorFetcher;
import org.babyfish.jimmer.sql.model.Book;
import org.babyfish.jimmer.sql.model.BookFetcher;
import org.babyfish.jimmer.sql.model.BookStoreFetcher;
import org.babyfish.jimmer.sql.model.dto.BookInput;
import org.babyfish.jimmer.sql.model.dto.CompositeBookInput;
import org.jetbrains.annotations.Nullable;

import java.math.BigDecimal;
import java.util.List;

/**
 * An interface to test generation of `META-INF/jimmer/client`
 */
@Api(groups = "abc")
public interface BookService {

    /**
     * Find books with simple format
     * @param name Optional value to filter `name`
     * @param edition Optional value to filter `edition`
     * @param minPrice Optional value to filter `price`
     * @param maxPrice Optional value to filter `price`
     * @param storeName Optional value to filter `store.name`
     * @param authorName Optional value to filter `Author.firstName` or `Author.lastName`
     * @return A list of books objects, with short associations
     */
    List<@FetchBy("SIMPLE_FETCHER") Book> findSimpleBooks(
            @Nullable String name,
            @Nullable Integer edition,
            @Nullable BigDecimal minPrice,
            @Nullable BigDecimal maxPrice,
            @Nullable String storeName,
            @Nullable String authorName
    );

    /**
     * Find books with simple format
     * @param name Optional value to filter `name`
     * @param edition Optional value to filter `edition`
     * @param minPrice Optional value to filter `price`
     * @param maxPrice Optional value to filter `price`
     * @param storeName Optional value to filter `store.name`
     * @param authorName Optional value to filter `Author.firstName` or `Author.lastName`
     * @return A list of books objects, with long associations
     */
    List<@FetchBy("COMPLEX_FETCHER") Book> findComplexBooks(
            @Nullable String name,
            @Nullable Integer edition,
            @Nullable BigDecimal minPrice,
            @Nullable BigDecimal maxPrice,
            @Nullable String storeName,
            @Nullable String authorName
    );

    void saveBook(BookInput input);

    void saveBook(CompositeBookInput input);

    Fetcher<Book> SIMPLE_FETCHER =
            BookFetcher.$
                    .allScalarFields()
                    .store()
                    .authors();

    BookFetcher COMPLEX_FETCHER =
            BookFetcher.$
                    .allScalarFields()
                    .store(
                            BookStoreFetcher.$.allScalarFields()
                    )
                    .authors(
                            AuthorFetcher.$.allScalarFields()
                    );
}
