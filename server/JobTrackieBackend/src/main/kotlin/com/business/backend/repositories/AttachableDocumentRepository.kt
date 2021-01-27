package com.business.backend.repositories

import org.springframework.data.repository.PagingAndSortingRepository
import com.business.backend.models.AttachableDocument
import org.springframework.data.domain.PageRequest

interface AttachableDocumentRepository : PagingAndSortingRepository<AttachableDocument, Integer> {

}