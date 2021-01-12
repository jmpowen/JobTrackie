package com.business.backend.models

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "attachableDocument")
data class AttachableDocument(
        var name: String,
		var description: String,
		var fileContent: ByteArray,
)