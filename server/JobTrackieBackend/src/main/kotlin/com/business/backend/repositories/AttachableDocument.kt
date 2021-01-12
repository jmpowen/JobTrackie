package com.business.backend.repositories

import org.springframework.data.repository.PagingAndSortingRepository
import com.business.backend.models.AttachableDocument

interface AttachableDocumentRepository : PagingAndSortingRepository<AttachableDocument, Integer> {
	
}