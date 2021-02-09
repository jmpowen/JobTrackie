package com.jobtrackie.jobapplications.model

import java.time.LocalDateTime

import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "application")
data class Application(
		var accountID: String,
		var name: String,
		var description: String,
		val date: LocalDateTime,
		var company: String,
		var position: String,
		var currentStatus: Status,
)

enum class Status {
	PENDING, REJECTED, INTERVIEW, OFFER, DECLINE, ACCEPTED, RESCINDED, UNKNOWN
}