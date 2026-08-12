const flipButtons = document.querySelectorAll('[data-action="flip"]');

flipButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const card = button.closest(".incident-card");

        card.classList.toggle("is-flipped");

        const isFlipped =
            card.classList.contains("is-flipped");

        const cardButtons =
            card.querySelectorAll('[data-action="flip"]');

        cardButtons.forEach((cardButton) => {
            cardButton.setAttribute(
                "aria-pressed",
                isFlipped
            );
        });

    });

});


// =================================
// TROUBLESHOOTING ACCORDION
// =================================

const troubleshootingPanels =
    document.querySelectorAll(".troubleshooting-panel");

troubleshootingPanels.forEach((panel) => {

    panel.setAttribute("tabindex", "0");
    panel.setAttribute("role", "button");
    panel.setAttribute("aria-expanded", "false");

    const togglePanel = () => {

        panel.classList.toggle("is-expanded");

        const isExpanded =
            panel.classList.contains("is-expanded");

        panel.setAttribute(
            "aria-expanded",
            isExpanded
        );

    };

    panel.addEventListener("click", togglePanel);

    panel.addEventListener("keydown", (event) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {
            event.preventDefault();
            togglePanel();
        }

    });

});



// =================================
// SIMULATED DIAGNOSTIC CONSOLE
// =================================

const diagnosticData = {

    ping: {
        command: "ping erp.lab.local",

        output: `PING erp.lab.local (10.10.10.25)

64 bytes from 10.10.10.25: icmp_seq=1
64 bytes from 10.10.10.25: icmp_seq=2
64 bytes from 10.10.10.25: icmp_seq=3

--- ping statistics ---
3 packets transmitted, 3 received

RESULT: Network connectivity successful.`,

        title: "Network reachable",

        analysis:
            "The simulated ERP endpoint responds successfully. " +
            "Basic network connectivity is therefore unlikely " +
            "to be the cause of the authentication incident.",

        status: "TEST PASSED",

        type: "success"
    },


    dns: {
        command: "nslookup erp.lab.local",

        output: `Server:     10.10.10.1
Address:    10.10.10.1#53

Name:       erp.lab.local
Address:    10.10.10.25

RESULT: DNS resolution successful.`,

        title: "DNS resolution successful",

        analysis:
            "The hostname resolves to the expected simulated " +
            "ERP server address. A DNS resolution problem can " +
            "be excluded from the investigation.",

        status: "TEST PASSED",

        type: "success"
    },


    account: {
        command: "account-status --user lab.user",

        output: `User:               lab.user
Account enabled:    Yes
Password expired:   No
Account locked:     YES
Failed attempts:    5

RESULT: Account lockout detected.`,

        title: "Account lockout detected",

        analysis:
            "The simulated account status identifies the first " +
            "meaningful failure condition. Network and DNS tests " +
            "passed, while the user account itself is locked.",

        status: "ERROR IDENTIFIED",

        type: "error"
    },


    auth: {
        command: "auth-log --user lab.user",

        output: `[09:14:02] AUTH_FAILURE  lab.user
[09:14:18] AUTH_FAILURE  lab.user
[09:14:31] AUTH_FAILURE  lab.user
[09:14:47] AUTH_FAILURE  lab.user
[09:15:03] AUTH_FAILURE  lab.user
[09:15:03] ACCOUNT_LOCKOUT lab.user

RESULT: Repeated failed authentication triggered lockout.`,

        title: "Root cause confirmed",

        analysis:
            "The simulated authentication log shows repeated " +
            "failed login attempts immediately before the " +
            "account lockout event. This supports the identified " +
            "root cause.",

        status: "ROOT CAUSE CONFIRMED",

        type: "error"
    }

};


const consoleButtons =
    document.querySelectorAll(".console-button");

const commandElement =
    document.getElementById("console-command");

const outputElement =
    document.getElementById("console-output");

const titleElement =
    document.getElementById("console-title");

const analysisElement =
    document.getElementById("console-analysis");

const statusElement =
    document.getElementById("analysis-status");


consoleButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const command =
            button.dataset.command;

        const data =
            diagnosticData[command];


        consoleButtons.forEach((currentButton) => {
            currentButton.classList.remove("active");
        });

        button.classList.add("active");


        commandElement.textContent =
            data.command;

        outputElement.textContent =
            data.output;

        titleElement.textContent =
            data.title;

        analysisElement.textContent =
            data.analysis;

        statusElement.textContent =
            data.status;


        statusElement.classList.remove(
            "success-status",
            "error-status"
        );

        if (data.type === "success") {

            statusElement.classList.add(
                "success-status"
            );

        } else {

            statusElement.classList.add(
                "error-status"
            );

        }

    });

});



// =================================
// INCIDENT SEARCH & FILTERING
// =================================

const incidentSearch =
    document.getElementById("incident-search");

const filterButtons =
    document.querySelectorAll(".filter-button");

let activeFilter = "all";


function filterIncidents() {

    const searchTerm =
        incidentSearch.value
            .toLowerCase()
            .trim();

    const incidentCards =
        document.querySelectorAll(".incident-card");

    incidentCards.forEach((card) => {

        const searchableText =
            card.textContent.toLowerCase();

        const matchesSearch =
            searchableText.includes(searchTerm);


        let matchesFilter = false;

        if (activeFilter === "all") {

            matchesFilter = true;

        } else if (activeFilter === "high") {

            matchesFilter =
                card.dataset.priority === "high";

        } else if (activeFilter === "resolved") {

            matchesFilter =
                card.dataset.status === "resolved";

        } else {

            matchesFilter =
                card.dataset.category === activeFilter;

        }


        if (matchesSearch && matchesFilter) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


incidentSearch.addEventListener(
    "input",
    filterIncidents
);


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        activeFilter =
            button.dataset.filter;


        filterButtons.forEach(
            (currentButton) => {
                currentButton.classList.remove("active");
            }
        );


        button.classList.add("active");

        filterIncidents();

    });

});
