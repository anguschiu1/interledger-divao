# Cheeri Demo

This is the sequence diagram about funders in Cheeri setup auto-funding to impact organization.

This setup is based on the proposed design of Open Payment using GNAP standard to exchange authorization details.

```mermaid
sequenceDiagram
autonumber
actor F as Funders
participant ChFE as Cheeri Web Frontend
participant ChBE as Cheeri Web Backend
participant ChASP as Cheeri ASP
participant ChASPA as Cheeri ASP AuthHost
participant ImOASPAuth as Impact Orgs ASP AuthHost
participant ImOASP as Impact Orgs ASP
actor I as Impact Orgs

I--)+ChFE: Set Impact Goals
ChFE--)-ChBE: Set Impact Goals
F--)+ChFE: Discover impact projects
ChFE--)-ChBE: Discover impact projects
F--)+ChFE: Define standardized goals
ChFE--)-ChBE: Define standardized goals
ChBE->>ChBE: Calculate funding for each Orgs

Note over F,ImOASP: Setup recurring (streaming) payment to Impact Orgs
F->>ChFE: Setup Streaming payout to Impact Orgs
ChFE->>+ChBE: Initiate streaming payout setup
ChBE->>+ImOASPAuth: "Incoming payment grant" request
ImOASPAuth-->>-ChBE: Access token granted
ChBE-)+ImOASP: Create incoming payment
ImOASP--)-ChBE: Incoming amount, INV no. returned

ChBE->>+ChASPA: "Quote + Outgoing Payment Grant" request
ChASPA-->>ChBE: Redirect URL provided
ChBE->>ChFE: Pass URL to browser frontend

ChFE->>ChASPA: Redirect Funder to consent popup
F->>+ChASPA: Funder consent the outgoing amount and quote
ChASPA--)-F: Inform amount will be streamed to target payment pointer
ChASPA->>-ChBE: "interact_ref" returned

ChBE->>+ChASPA: Continuing "Quote + Outgoing Payment grant" request with "interact_ref"
ChASPA-->>-ChBE: Access token granted
loop Streaming payment
ChBE->>+ChASP: Create a quote with "incomingPaymentId"
ChASP-->>-ChBE: Quotes details, e.g. "receiveAmount" and "sendAmount" returned
ChBE->>+ChASP: Create outgoing payment to Impact Orgs payment pointer and quoteId
ChASP-->>-ChBE: Outgoing payment generated (INV No., paymentPointer,quoteId)
end
Note over ChASP, ImOASP: ILP nodes exchange payment info and adjust account balances
ChBE-->>-ChFE: Upcoming payment status
ChFE--)F: Inform payment status
ChFE--)I: Inform payment status
```
