package com.business.backend.entities

import java.time.LocalDateTime
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "account")
data class Account(
        var email: String,
        var type: String,
        val joinDate: LocalDateTime
)