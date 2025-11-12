---
info:
  _postman_id: 0b80c967-8bf2-492c-8619-4c72a0ff7550
  name: Mini-Task-Api
  schema: https://schema.getpostman.com/json/collection/v2.1.0/collection.json
  _exporter_id: '49038152'
  _collection_link: https://joint-operations-geoscientist-3265399-4580858.postman.co/workspace/Nattika-Phothong's-Workspace~1f82e6f5-451c-419b-878f-35723ab5c747/collection/49038152-0b80c967-8bf2-492c-8619-4c72a0ff7550?action=share&source=collection_link&creator=49038152
item:
- name: http://localhost:8080/api/v1/auth/register
  request:
    method: POST
    header: []
    body:
      mode: raw
      raw: "{\r\n  \"email\": \"lemont@user.com\",\r\n  \"password\": \"lemon8\",\r\n
        \ \"name\": \"lemon\"\r\n}"
      options:
        raw:
          language: json
    url:
      raw: http://localhost:8080/api/v1/auth/register
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v1
      - auth
      - register
  response: []
- name: http://localhost:8080/api/v1/auth/login
  request:
    method: POST
    header: []
    body:
      mode: raw
      raw: "{\r\n  \"email\": \"user@test.com\",\r\n  \"password\": \"password123\"\r\n}"
      options:
        raw:
          language: json
    url:
      raw: http://localhost:8080/api/v1/auth/login
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v1
      - auth
      - login
  response: []
- name: http://localhost:8080/api/v1/auth/refresh
  request:
    method: POST
    header: []
    body:
      mode: raw
      raw: "{\r\n  \"refreshToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzMzcxMzZkZC03NWFiLTQ5YzQtOWJhYi01ZWI3YTY2Y2EwMDgiLCJpYXQiOjE3NjI5NTEyMDQsImV4cCI6MTc2MzU1NjAwNH0.tmtH9QtQRK1qAcvqG4UZljue3UGib3tsRK2WTkeZyaE\"\r\n}\r\n"
      options:
        raw:
          language: json
    url:
      raw: http://localhost:8080/api/v1/auth/refresh
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v1
      - auth
      - refresh
  response: []
- name: http://localhost:8080/api/v1/auth/logout
  request:
    auth:
      type: bearer
      bearer:
      - key: token
        value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzMzcxMzZkZC03NWFiLTQ5YzQtOWJhYi01ZWI3YTY2Y2EwMDgiLCJlbWFpbCI6ImxlbW9udEB1c2VyLmNvbSIsInJvbGUiOiJ1c2VyIiwiaXNQcmVtaXVtIjpmYWxzZSwiaWF0IjoxNzYyOTUyMDI2LCJleHAiOjE3NjI5NTI5MjZ9.pU65e2TeT-pfcPxngdg1jAz1cZHBt8ruiEHqUHpAzII
        type: string
    method: POST
    header: []
    body:
      mode: raw
      raw: ''
      options:
        raw:
          language: json
    url:
      raw: http://localhost:8080/api/v1/auth/logout
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v1
      - auth
      - logout
  response: []
- name: http://localhost:8080/api/v1/users/me
  request:
    auth:
      type: bearer
      bearer:
      - key: token
        value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzMzcxMzZkZC03NWFiLTQ5YzQtOWJhYi01ZWI3YTY2Y2EwMDgiLCJlbWFpbCI6ImxlbW9udEB1c2VyLmNvbSIsInJvbGUiOiJ1c2VyIiwiaXNQcmVtaXVtIjpmYWxzZSwiaWF0IjoxNzYyOTUyMDI2LCJleHAiOjE3NjI5NTI5MjZ9.pU65e2TeT-pfcPxngdg1jAz1cZHBt8ruiEHqUHpAzII
        type: string
    method: GET
    header: []
    url:
      raw: http://localhost:8080/api/v1/users/me
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v1
      - users
      - me
  response: []
- name: http://localhost:8080/api/v1/users/me
  request:
    auth:
      type: bearer
      bearer:
      - key: token
        value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzMzcxMzZkZC03NWFiLTQ5YzQtOWJhYi01ZWI3YTY2Y2EwMDgiLCJlbWFpbCI6ImxlbW9udEB1c2VyLmNvbSIsInJvbGUiOiJ1c2VyIiwiaXNQcmVtaXVtIjpmYWxzZSwiaWF0IjoxNzYyOTUyMzkwLCJleHAiOjE3NjI5NTMyOTB9.A8HPlJ9arlkRcI2uabXXcJpQlfDgufbVHgp4qBmL3Ss
        type: string
    method: PUT
    header: []
    body:
      mode: raw
      raw: "{\r\n  \"email\": \"lemont@user.com\",\r\n  \"name\": \"Lemonnn\"\r\n}"
      options:
        raw:
          language: json
    url:
      raw: http://localhost:8080/api/v1/users/me
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v1
      - users
      - me
  response: []
- name: http://localhost:8080/api/v1/users/me
  request:
    auth:
      type: bearer
      bearer:
      - key: token
        value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzMzcxMzZkZC03NWFiLTQ5YzQtOWJhYi01ZWI3YTY2Y2EwMDgiLCJlbWFpbCI6ImxlbW9udEB1c2VyLmNvbSIsInJvbGUiOiJ1c2VyIiwiaXNQcmVtaXVtIjpmYWxzZSwiaWF0IjoxNzYyOTUyMzkwLCJleHAiOjE3NjI5NTMyOTB9.A8HPlJ9arlkRcI2uabXXcJpQlfDgufbVHgp4qBmL3Ss
        type: string
    method: DELETE
    header: []
    url:
      raw: http://localhost:8080/api/v1/users/me
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v1
      - users
      - me
  response: []
- name: http://localhost:8080/api/v1/users
  request:
    auth:
      type: bearer
      bearer:
      - key: token
        value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NzI1YjljNC03MDFhLTQ4MmQtYjYyYS1iMzg1NGYzYTQ2M2MiLCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwicm9sZSI6ImFkbWluIiwiaXNQcmVtaXVtIjpmYWxzZSwiaWF0IjoxNzYyOTUzMTAzLCJleHAiOjE3NjI5NTQwMDN9.Nlj1L50KiYZbpo5g-_qXzYc1Zp4aKOWAOcrpd1n7qrE
        type: string
    method: GET
    header: []
    url:
      raw: http://localhost:8080/api/v1/users
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v1
      - users
  response: []
- name: http://localhost:8080/api/v1/tasks
  request:
    auth:
      type: bearer
      bearer:
      - key: token
        value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzMzcxMzZkZC03NWFiLTQ5YzQtOWJhYi01ZWI3YTY2Y2EwMDgiLCJlbWFpbCI6ImxlbW9udEB1c2VyLmNvbSIsInJvbGUiOiJ1c2VyIiwiaXNQcmVtaXVtIjpmYWxzZSwiaWF0IjoxNzYyOTQ4NzQwLCJleHAiOjE3NjI5NDk2NDB9.3W5gUOJZvn_1JoZVPYZvo3hMSNbZR1Lr9lumhOQSHAU
        type: string
    method: POST
    header: []
    body:
      mode: raw
      raw: "{\r\n  \"title\": \"My V1 Task\"\r\n}"
      options:
        raw:
          language: json
    url:
      raw: http://localhost:8080/api/v1/tasks
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v1
      - tasks
  response: []
- name: http://localhost:8080/api/v1/tasks
  request:
    method: GET
    header: []
  response: []
- name: http://localhost:8080/api/v1/tasks/180755b6-26e3-44f7-a4be-ecec02c67010
  request:
    auth:
      type: bearer
      bearer:
      - key: token
        value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NzI1YjljNC03MDFhLTQ4MmQtYjYyYS1iMzg1NGYzYTQ2M2MiLCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwicm9sZSI6ImFkbWluIiwiaXNQcmVtaXVtIjpmYWxzZSwiaWF0IjoxNzYyOTUzOTg2LCJleHAiOjE3NjI5NTQ4ODZ9.0mWVchy0o0Z0EaE7GYPaH235BCJ0oiV8KYtYawclpbs
        type: string
    method: GET
    header: []
    url:
      raw: http://localhost:8080/api/v1/tasks/180755b6-26e3-44f7-a4be-ecec02c67010
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v1
      - tasks
      - 180755b6-26e3-44f7-a4be-ecec02c67010
  response: []
- name: http://localhost:8080/api/v1/tasks/180755b6-26e3-44f7-a4be-ecec02c67010
  request:
    auth:
      type: bearer
      bearer:
      - key: token
        value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NzI1YjljNC03MDFhLTQ4MmQtYjYyYS1iMzg1NGYzYTQ2M2MiLCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwicm9sZSI6ImFkbWluIiwiaXNQcmVtaXVtIjpmYWxzZSwiaWF0IjoxNzYyOTUzOTg2LCJleHAiOjE3NjI5NTQ4ODZ9.0mWVchy0o0Z0EaE7GYPaH235BCJ0oiV8KYtYawclpbs
        type: string
    method: PUT
    header: []
    body:
      mode: raw
      raw: "{\r\n  \"title\": \"My V1 Task (UPDATED)\",\r\n  \"description\": \"Testing
        v1 PUT\",\r\n  \"status\": \"in_progress\"\r\n}"
      options:
        raw:
          language: json
    url:
      raw: http://localhost:8080/api/v1/tasks/180755b6-26e3-44f7-a4be-ecec02c67010
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v1
      - tasks
      - 180755b6-26e3-44f7-a4be-ecec02c67010
  response: []
- name: http://localhost:8080/api/v1/tasks/180755b6-26e3-44f7-a4be-ecec02c67010/status
  request:
    auth:
      type: bearer
      bearer:
      - key: token
        value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NzI1YjljNC03MDFhLTQ4MmQtYjYyYS1iMzg1NGYzYTQ2M2MiLCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwicm9sZSI6ImFkbWluIiwiaXNQcmVtaXVtIjpmYWxzZSwiaWF0IjoxNzYyOTUzOTg2LCJleHAiOjE3NjI5NTQ4ODZ9.0mWVchy0o0Z0EaE7GYPaH235BCJ0oiV8KYtYawclpbs
        type: string
    method: PATCH
    header:
    - key: Idempotency-Key
      value: v1-key-patch-A
      type: text
    body:
      mode: raw
      raw: "{\r\n  \"status\": \"completed\"\r\n}"
      options:
        raw:
          language: json
    url:
      raw: http://localhost:8080/api/v1/tasks/180755b6-26e3-44f7-a4be-ecec02c67010/status
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v1
      - tasks
      - 180755b6-26e3-44f7-a4be-ecec02c67010
      - status
  response: []
- name: http://localhost:8080/api/v1/tasks/180755b6-26e3-44f7-a4be-ecec02c67010
  request:
    auth:
      type: bearer
      bearer:
      - key: token
        value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NzI1YjljNC03MDFhLTQ4MmQtYjYyYS1iMzg1NGYzYTQ2M2MiLCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwicm9sZSI6ImFkbWluIiwiaXNQcmVtaXVtIjpmYWxzZSwiaWF0IjoxNzYyOTUzOTg2LCJleHAiOjE3NjI5NTQ4ODZ9.0mWVchy0o0Z0EaE7GYPaH235BCJ0oiV8KYtYawclpbs
        type: string
    method: DELETE
    header: []
    url:
      raw: http://localhost:8080/api/v1/tasks/180755b6-26e3-44f7-a4be-ecec02c67010
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v1
      - tasks
      - 180755b6-26e3-44f7-a4be-ecec02c67010
  response: []
- name: http://localhost:8080/api/v2/tasks
  request:
    auth:
      type: bearer
      bearer:
      - key: token
        value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NzI1YjljNC03MDFhLTQ4MmQtYjYyYS1iMzg1NGYzYTQ2M2MiLCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwicm9sZSI6ImFkbWluIiwiaXNQcmVtaXVtIjpmYWxzZSwiaWF0IjoxNzYyOTUzOTg2LCJleHAiOjE3NjI5NTQ4ODZ9.0mWVchy0o0Z0EaE7GYPaH235BCJ0oiV8KYtYawclpbs
        type: string
    method: POST
    header:
    - key: Idempotency-Key
      value: v2-key-C
      type: text
    body:
      mode: raw
      raw: "{\r\n  \"title\": \"V2 Task (for v2 test)\"\r\n}"
      options:
        raw:
          language: json
    url:
      raw: http://localhost:8080/api/v2/tasks
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v2
      - tasks
  response: []
- name: http://localhost:8080/api/v2/tasks
  request:
    auth:
      type: bearer
      bearer:
      - key: token
        value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzMzcxMzZkZC03NWFiLTQ5YzQtOWJhYi01ZWI3YTY2Y2EwMDgiLCJlbWFpbCI6ImxlbW9udEB1c2VyLmNvbSIsInJvbGUiOiJ1c2VyIiwiaXNQcmVtaXVtIjpmYWxzZSwiaWF0IjoxNzYyOTQ1ODQ3LCJleHAiOjE3NjI5NDY3NDd9.N7pYFT3Vumr7wNZWNzAus3LRSfex9EzlaN2mms1z5CI
        type: string
    method: GET
    header: []
    url:
      raw: http://localhost:8080/api/v2/tasks
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v2
      - tasks
  response: []
- name: http://localhost:8080/api/v2/tasks/db0e9d41-0274-49b0-9602-9c3efbc65682
  request:
    auth:
      type: bearer
      bearer:
      - key: token
        value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NzI1YjljNC03MDFhLTQ4MmQtYjYyYS1iMzg1NGYzYTQ2M2MiLCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwicm9sZSI6ImFkbWluIiwiaXNQcmVtaXVtIjpmYWxzZSwiaWF0IjoxNzYyOTUzOTg2LCJleHAiOjE3NjI5NTQ4ODZ9.0mWVchy0o0Z0EaE7GYPaH235BCJ0oiV8KYtYawclpbs
        type: string
    method: GET
    header: []
    url:
      raw: http://localhost:8080/api/v2/tasks/db0e9d41-0274-49b0-9602-9c3efbc65682
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v2
      - tasks
      - db0e9d41-0274-49b0-9602-9c3efbc65682
  response: []
- name: http://localhost:8080/api/v2/tasks/b211c54e-bb55-4f7e-a315-0b15a5815b7e
  request:
    auth:
      type: bearer
      bearer:
      - key: token
        value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NzI1YjljNC03MDFhLTQ4MmQtYjYyYS1iMzg1NGYzYTQ2M2MiLCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwicm9sZSI6ImFkbWluIiwiaXNQcmVtaXVtIjpmYWxzZSwiaWF0IjoxNzYyOTUzOTg2LCJleHAiOjE3NjI5NTQ4ODZ9.0mWVchy0o0Z0EaE7GYPaH235BCJ0oiV8KYtYawclpbs
        type: string
    method: PUT
    header: []
    body:
      mode: raw
      raw: "{\r\n  \"title\": \"V2 Task (UPDATED by PUT)\",\r\n  \"description\":
        \"Testing v2 PUT\",\r\n  \"status\": \"pending\"\r\n}"
      options:
        raw:
          language: json
    url:
      raw: http://localhost:8080/api/v2/tasks/db0e9d41-0274-49b0-9602-9c3efbc65682
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v2
      - tasks
      - db0e9d41-0274-49b0-9602-9c3efbc65682
  response: []
- name: http://localhost:8080/api/v2/tasks/db0e9d41-0274-49b0-9602-9c3efbc65682/status
  request:
    auth:
      type: bearer
      bearer:
      - key: token
        value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NzI1YjljNC03MDFhLTQ4MmQtYjYyYS1iMzg1NGYzYTQ2M2MiLCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwicm9sZSI6ImFkbWluIiwiaXNQcmVtaXVtIjpmYWxzZSwiaWF0IjoxNzYyOTU1MTA0LCJleHAiOjE3NjI5NTYwMDR9.iTFQd0oTENYfaUPIHfh2IBSuQNNOtU0fLFs-fKkdqs0
        type: string
    method: PATCH
    header:
    - key: Idempotency-Key
      value: v2-key-patch-C
      type: text
    body:
      mode: raw
      raw: "{\r\n  \"status\": \"completed\"\r\n}"
      options:
        raw:
          language: json
    url:
      raw: http://localhost:8080/api/v2/tasks/db0e9d41-0274-49b0-9602-9c3efbc65682/status
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v2
      - tasks
      - db0e9d41-0274-49b0-9602-9c3efbc65682
      - status
  response: []
- name: http://localhost:8080/api/v2/tasks/b211c54e-bb55-4f7e-a315-0b15a5815b7e
  request:
    auth:
      type: bearer
      bearer:
      - key: token
        value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NzI1YjljNC03MDFhLTQ4MmQtYjYyYS1iMzg1NGYzYTQ2M2MiLCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwicm9sZSI6ImFkbWluIiwiaXNQcmVtaXVtIjpmYWxzZSwiaWF0IjoxNzYyOTU1MTA0LCJleHAiOjE3NjI5NTYwMDR9.iTFQd0oTENYfaUPIHfh2IBSuQNNOtU0fLFs-fKkdqs0
        type: string
    method: DELETE
    header: []
    url:
      raw: http://localhost:8080/api/v2/tasks/db0e9d41-0274-49b0-9602-9c3efbc65682
      protocol: http
      host:
      - localhost
      port: '8080'
      path:
      - api
      - v2
      - tasks
      - db0e9d41-0274-49b0-9602-9c3efbc65682
  response: []
