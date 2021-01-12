package com.business.backend.entities

import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "attachableDocument")
data class AttachableDocument(
        var name: String,
		var description: String,
		var fileContent: ByteArray,
)