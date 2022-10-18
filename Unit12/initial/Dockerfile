FROM openjdk:18 AS builder

COPY . /tmp
WORKDIR /tmp

RUN sed -i 's/\r$//' ./gradlew
RUN ./gradlew build

FROM openjdk:18
COPY --from=builder /tmp/build/libs/*.jar ./

CMD ["java", "-jar", "spring-boot-0.0.1-SNAPSHOT.jar"]
