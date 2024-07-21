````mermaid
sequenceDiagram
    participant browser
    participant server

    broswer->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server->>browser: 201 Created
    deactivate server


```