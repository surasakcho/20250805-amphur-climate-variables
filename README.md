# Repository Data Description
This repository contains climate variables at the Amphur (district) level in Thailand, with data aggregated to a yearly frequency. The data is partitioned into separate CSV files, each covering a single decade, to manage file size.

## File Naming Convention:
- `df_amphur_climate_agg_var-option-3-<DECADES>.csv`
- `<DECADES>` specifies the decade the file covers (e.g., 1990s).

## Available Time Periods:
- Historical Data: 1990–2024
- Future Projections: 2040–2070

## Data Structure:
Each file contains four primary climate measurements, along with decomposed variables based on the methodology from Burney (2024):
- Temperature (t): Celsius degrees.
- Precipitation (p): Millimeters.
- spi3m: 3-month moving average of the Standardized Precipitation Index.
- spi6m: 6-month moving average of the Standardized Precipitation Index.

## Decomposed Variables:
For each climate measurement (X), the following variables are included:

## Variable Name	Description:
- `X_hat`	Yearly expected average (or sum for precipitation) based on a baseline and time trend.
- `X_hat1`	Expected value at the start of the first period.
- `X_<wet/dry>_hat`	Seasonal expected average (or sum for precipitation) based on a baseline and time trend.
- `X_<wet/dry>_seasonal`	Average (or sum for precipitation) of monthly seasonal deviation.
- `X_<wet/dry>_abs_seasonal`	Average (or sum for precipitation) of absolute monthly seasonal deviation.
- `X_<wet/dry>_<cov/idio>_<level>`	Average (or sum for precipitation) of covariate/idiosyncratic shocks at the specified geographic level (nation, region, or province).
- `X_<wet/dry>_abs_<cov/idio>_<level>`	Average (or sum for precipitation) of absolute covariate/idiosyncratic shocks at the specified geographic level (nation, region, or province).
- `X_intercept` Baseline value just before the start of the first period
- `X_trend` Trend term or estimated slope of measturement

## Note:
- cov: Covariate shock
- idio: Idiosyncratic shock
- level: nation, region, or province
- wet: Including May to October (except some provinces in Southern region will be August to January)
- dry: Including November to April (except some provinces in Southern region will be February to July)
- year: For `option-3` year designation, year will be assigned considering the most frequent year of given original monthly data. For example, in the special southern provinces, Aug'17 to Jan'18 will be assigned to Wet-2017 and Feb'18 to Jul'18 will be assigned to Dry-2018.
