# Cheeri Demo

This is the sequence diagram about Cheeri user auto-funding impact organization.

```mermaid
sequenceDiagram
autonumber
actor F as Impact Funders
actor I as Impact Orgs
participant CFE as Cheeri Web Frontend
participant CBE as Cheeri Web Backend
participant AP as AgnosticPay
participant APA as AgnosticPay authorization server
participant IAAuth as Impact Orgs ASP AuthHost
participant IA as Impact Orgs ASP
I--)+CFE: Set Impact Goals
CFE--)-CBE: Set Impact Goals
F--)+CFE: Discover impact projects
CFE--)-CBE: Discover impact projects
F--)+CFE: Define standardized goals
CFE--)-CBE: Define standardized goals
CBE->>CBE: Calculate funding to each Orgs

Note over AP,IA: Outgoing payment to Impact Orgs
CBE->>+IAAuth: "Incoming Payment Grant" request
IAAuth-->>-CBE: Access token granted
CBE-)+IA: Create incoming payment
IA--)-CBE: Incoming amount, INV no. returned
CBE->>+APA: Non-interactive "Quote + Outgoing Payment Grant" request
APA-->>-CBE: Access token granted
CBE->>+AP: Create a quote using provided "incomingPaymentId"
AP-->>-CBE: Quotes details, e.g. "receiveAmount" and "sendAmount" returned
CBE->>+AP: Create outgoing payment to Impact Org's payment pointer and quoteId
AP-->>-CBE: Outgoing payment generated (INV No., paymentPointer,quoteId)
Note over AP, IA: ILP nodes exchange payment info and adjust account balances
CBE-->>CFE: Payment execution status update
CFE-->>F: Push message: balance updated
CFE-->>I: Push message: balance updated
```
