# INC-001 — ERP Authentication Lockout

## Incident Summary

A user was unable to access the simulated ERP application because authentication repeatedly failed.

**Category:** Authentication  
**Priority:** High  
**Status:** Resolved  
**Environment:** Windows 11 / Simulated ERP Application  
**Impact:** Single user unable to access required ERP functionality

---

## User Report

The user reported that they had previously been able to access the ERP application but were now receiving an authentication error when attempting to sign in.

---

## Initial Hypotheses

Possible causes considered during the initial investigation:

1. Incorrect username or password
2. Expired password
3. Locked user account
4. Network connectivity issue
5. DNS resolution issue
6. ERP authentication service unavailable

---

## Troubleshooting Process

### 1. Determine the scope

Checked whether other users were experiencing the same issue.

**Result:** Other users could access the ERP application normally.

**Conclusion:** The issue appeared to be isolated to one user.

---

### 2. Verify network connectivity

A simulated connectivity test was performed against the ERP lab endpoint.

```text
$ ping erp.lab.local

PING erp.lab.local (10.10.10.25)

64 bytes from 10.10.10.25: icmp_seq=1
64 bytes from 10.10.10.25: icmp_seq=2
64 bytes from 10.10.10.25: icmp_seq=3

3 packets transmitted, 3 received

