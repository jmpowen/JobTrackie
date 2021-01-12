package com.business.backend.entities

import java.time.LocalDateTime
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