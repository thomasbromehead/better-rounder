# Rounder that solves standard JS rounder issues

JS constructs numbers as powers of 2, 1.005 * 100 = 100,499 and will be Math.round down to 100.
