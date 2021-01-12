package com.business.backend.entities

import java.time.LocalDateTime
import org.springframework.data.mongodb.core.mapping.Document

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
S
enum class Status {
    PENDING, REJECTED, INTERVIEW, OFFER, ACCEPTED, UNKOWN
}