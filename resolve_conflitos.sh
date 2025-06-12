#!/bin/bash

# Script para resolver todos os conflitos de um rebase aceitando sempre o lado local (ours)

while ! git rebase --continue 2>/dev/null; do
  echo "Resolvendo conflitos..."
  # Para cada arquivo em conflito, aceita o lado local (ours)
  for file in $(git diff --name-only --diff-filter=U); do
    git checkout --ours "$file"
    git add "$file"
    echo "Conflito resolvido em: $file (mantido o lado local)"
  done
done

echo "Rebase finalizado com todos os conflitos resolvidos pelo lado local (ours)!"