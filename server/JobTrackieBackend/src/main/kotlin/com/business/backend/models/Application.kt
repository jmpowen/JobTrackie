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
@Document(collection = "application")
data class Application(
        var accountId: String,
        var description: String,
        val date: LocalDateTime,
        var company: String,
        var position: String,
        var attachedDocuments: ArrayList<AttachableDocument>,
        var currentStatus: Status,
)

enum class Status {
    PENDING, REJECTED, INTERVIEW, OFFER, ACCEPTED, UNKOWN
}