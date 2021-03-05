package com.jobtrackie.jobapplications.db

import com.mongodb.client.MongoDatabase
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.MongoDatabaseFactory
import org.springframework.stereotype.Component

// https://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/
@Component
class MongoClient(
        @Autowired private var mongo: MongoDatabaseFactory
) {

    fun setup(){
       var mongoDb = mongo.getMongoDatabase("mongodb+srv://spring-user_1:spring@umadit-obxpb.mongodb.net/trackieDB?retryWrites=true&w=majority")

    }


}