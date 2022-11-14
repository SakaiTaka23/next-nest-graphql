#!/bin/ash
# wait-db.sh

set -e

until nc -z db 3306; do
  >&2 echo "mysql waiting"
  sleep 3
done
>&2 echo "mysql ok"

exec $@
