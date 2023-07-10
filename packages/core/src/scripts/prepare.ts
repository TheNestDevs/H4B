import shell from "shelljs";

class EnpCript {
    constructor(private keystoreLocation: string) {
        const isGPGInstalled = shell.which("ssh-keygen");
        if (!isGPGInstalled) {
            console.log("ssh-keygen is not installed. Please install ssh-keygen and try again.");
        }
        if (!shell.test("-e", keystoreLocation)) {
            shell.mkdir("-p", keystoreLocation);
        }
    }

    public generateKey(keyname: string) {
        // Check if keyname exists
        if (shell.test("-e", `${this.keystoreLocation}/${keyname}.key`)) {
            return "Key already exists.";
        }

        // Generate key
        console.log(`${this.keystoreLocation}/${keyname}`);
        shell.exec(
            `
            ssh-keygen -t rsa -P "" -b 4096 -m PEM -f ${this.keystoreLocation}/${keyname}.key
        `,
            {
                silent: false,
            },
        );
        // shell.exec(
        //     `
        //     ssh-keygen -e -m PEM -f ${this.keystoreLocation}/${keyname}.key > ${this.keystoreLocation}/${keyname}.key.pub
        // `,
        //     {
        //         silent: false,
        //     },
        // );

        return "Key generated successfully.";
    }

    public encryptMessage(message: string, keyname: string) {
        // Check if keyname exists
        if (!shell.test("-e", `${this.keystoreLocation}/${keyname}.key`)) {
            return;
        }

        // Encrypt message
        const encData = shell.exec(
            `
            echo "${message}" | openssl pkeyutl -encrypt -pubin -inkey ${this.keystoreLocation}/${keyname}.key.pub | base64
        `,
            {
                silent: false,
            },
        );

        return encData.stdout;
    }

    public decryptMessage(message: string, keyname: string) {
        message = message.replace(/\n/g, "");
        console.log(message);
        // Check if keyname exists
        if (!shell.test("-e", `${this.keystoreLocation}/${keyname}.key`)) {
            return;
        }

        // Decrypt message
        const decData = shell.exec(
            `
            echo "${message}" | base64 --decode | openssl pkeyutl -decrypt -inkey ${this.keystoreLocation}/${keyname}.key
        `,
            {
                silent: false,
            },
        );

        if (decData.stderr) {
            throw new Error(decData.stderr);
        }
        return decData.stdout;
    }

    public getkeyFingerprint(keyname: string) {
        // Check if keyname exists
        if (!shell.test("-e", `${this.keystoreLocation}/${keyname}.key`)) {
            return;
        }

        // Get fingerprint
        const fingerprint = shell.exec(
            `
            ssh-keygen -lf ${this.keystoreLocation}/${keyname}.pub
        `,
            {
                silent: false,
            },
        );

        return fingerprint.stdout;
    }

    public getkeyFingerprintPrivate(keyname: string) {
        // Check if keyname exists
        if (!shell.test("-e", `${this.keystoreLocation}/${keyname}.key`)) {
            return;
        }

        // Get fingerprint
        const fingerprint = shell.exec(
            `
            ssh-keygen -lf ${this.keystoreLocation}/${keyname}.key
        `,
            {
                silent: false,
            },
        );

        return fingerprint.stdout;
    }
}

export default EnpCript;