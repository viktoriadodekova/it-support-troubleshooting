# INC-003 — VPN Connection Fails After Password Change

## Incident Summary

A remote user was unable to establish a VPN connection after changing their account password.

**Category:** Network / Access  
**Priority:** High  
**Status:** Resolved  
**Environment:** Windows 11 / Simulated VPN Client  
**Impact:** Remote user unable to access internal resources

---

## User Report

The user reported that the VPN connection had worked previously but started failing shortly after their account password was changed.

The user still had normal internet access.

---

## Initial Hypotheses

Possible causes considered:

1. Internet connectivity problem
2. VPN service unavailable
3. Incorrect new password
4. DNS resolution issue
5. User account lockout
6. Cached or outdated VPN credentials

---

## Troubleshooting Process

### 1. Verify general internet connectivity

Confirmed that the user could access external websites normally.

**Result:** Internet connectivity available.

**Conclusion:** General internet connectivity was not the cause.

---

### 2. Confirm scope

Checked whether the VPN issue affected other users.

**Result:** No widespread VPN outage was reported.

**Conclusion:** The issue appeared to be isolated to the user.

---

### 3. Verify current credentials

Confirmed that the user could authenticate with the newly changed password in another simulated company service.

**Result:** New account credentials were valid.

---

### 4. Review VPN authentication behavior

The simulated VPN client continued returning an authentication failure.

```text
VPN_AUTH_FAILURE

User: lab.user
Connection: company-vpn
Reason: Invalid credentials

