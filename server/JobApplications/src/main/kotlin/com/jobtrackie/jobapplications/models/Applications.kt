package com.jobtrackie.jobapplications.models

import java.time.LocalDateTime
data class Applications(
		var accuontId: String,
		var description: String,
		val date: LocalDateTime,
		var company: String,
		var position: String,
		var currentStatus: Status,
)

enum class Status {
	PENDING, REJECTED, INTERVIEW, OFFER, DECLINE, ACCEPTED, RESCINDED, UNKNOWN
}