package org.babyfish.jimmer.sql.example.graphql.entities;

import org.babyfish.jimmer.sql.Key;
import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Entity
public interface Book {

    @Id
    @GeneratedValue(generator = UUIDIdGenerator.FULL_NAME)
    UUID id();

    @Key
    @NotBlank
    String name();

    @Key
    @Positive
    int edition();

    BigDecimal price();

    @ManyToOne(optional = true)
    BookStore store();

    @ManyToMany
    @JoinTable(
            name = "BOOK_AUTHOR_MAPPING",
            joinColumns = @JoinColumn(name = "BOOK_ID"),
            inverseJoinColumns = @JoinColumn(name = "AUTHOR_ID")
    )
    List<Author> authors();
}

