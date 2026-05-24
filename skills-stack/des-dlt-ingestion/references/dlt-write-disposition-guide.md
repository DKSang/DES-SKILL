# dlt Write Disposition Guide

## Append

Use for immutable events.

Risk:

- duplicates if source resends data;
- late-arriving events need downstream handling.

## Replace

Use for small snapshots or full-refresh dimensions.

Risk:

- expensive for large data;
- loses previous state unless history is stored elsewhere.

## Merge

Use for mutable entities.

Requirements:

- primary key or merge key;
- clear update behavior;
- conflict handling;
- delete behavior if relevant.

## DES Rule

Every resource must document its write disposition and reason.
