# Step 05 - Run and Collect Evidence

Use this step after designing a Provero check suite.

## Validation Commands

Use the appropriate command for the context:

```text
provero validate
provero run
provero run --report html
provero profile
provero history
provero contract validate
provero contract diff
```

## Evidence To Capture

```text
config path:
command:
source connector:
table/file:
checks run:
passed:
failed:
warnings:
score:
duration:
report path:
history result:
contract validation result:
contract diff result:
limitations:
```

## Done Gate Logic

Use:

```text
PASS
PASS_WITH_LIMITATIONS
FAIL
BLOCKED
```

Rules:

* blocker failure → BLOCKED
* critical failure → FAIL unless waived with reason
* warning only → PASS_WITH_LIMITATIONS
* all pass → PASS

## Output

Write to the relevant DES evidence file.
