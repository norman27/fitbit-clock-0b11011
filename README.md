# fitbit-clock-0b11011
Binary clockface for the fitbit.
[https://gallery.fitbit.com/details/84e4e4bc-5847-4a77-873c-386be1f60971](Get it here)

## Preview
### Fitbit Versa
![Versa](https://raw.githubusercontent.com/norman27/fitbit-clock-0b11011/master/screenshots/versa.png)  

### Fitbit Ionic
![Ionic](https://raw.githubusercontent.com/norman27/fitbit-clock-0b11011/master/screenshots/ionic.png)  

## Build and Release
Useful commands to use the [https://dev.fitbit.com/release-notes/fitbit-os-simulator/](Fitbit OS Simulator)
with [https://github.com/Fitbit/developer-bridge/tree/master/packages/sdk-cli](fitbit CLI)

First open the Fitbit OS Simulator, and afterwards run these commands:
```bash
npx fitbit
connect phone
connect device
build
install
screenshot screenshots/[versa|ionic].png
```

Screenshots and the `.fba` which can be found in the build-folder can be used to
release to [https://gam.fitbit.com/apps](fitbit app gallery).