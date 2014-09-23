﻿define(
     ({
        map: {
            error: "Kan ikke opprette kart"
        },
        onlineStatus: {
            offline: "Du jobber nå frakoblet. Svar på skjemaene blir lagret lokalt til det kan opprettes en forbindelse til serveren.",
            reconnecting: "Kobler til på nytt&hellip;",
            pending: "${total} ventende redigering(er) blir sendt inn når nettverkstilkoblingen gjenopprettes."
        },
        configure: {
            mapdlg: {
                items: {
                    organizationLabel: "Min organisasjon",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "Mitt innhold",
                    favoritesLabel: "Mine favoritter"
                },
                title: "Velg webkart",
                searchTitle: "Søk",
                ok: "Ok",
                cancel: "Avbryt",
                placeholder: "Angi søkeord"
            },
            groupdlg: {
                items: {
                    organizationLabel: "Min organisasjon",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "Mitt innhold",
                    favoritesLabel: "Mine favoritter"
                },
                title: "Velg gruppe",
                searchTitle: "Søk",
                ok: "Ok",
                cancel: "Avbryt",
                placeholder: "Angi søkeord"
            }
        },
        user: {
            mgrs: "MGRS",
            usng: "USNG",
            utm: "UTM",
            utm_northing: "Northing",
            utm_easting: "Easting",
            utm_zone_number: "Sonenummer",
            geoFormGeneralTabText: "1. Skriv inn informasjon",
            locationInformationText: "2. Velg lokasjon",
            submitInformationText: "3. Fyll ut skjemaet",
            submitInstructions: "Legg til denne informasjonen i kartet.",
            myLocationText: "Gjeldende lokasjon",
            locationDescription: "Angi lokasjonen for denne oppføringen ved å klikke/trykke på kartet, eller ved å bruke ett av følgende alternativer.",
            addressText: "Søk",
            geographic: "Bredde/lengde",
            locationTabText: "Lokasjon",
            locationPopupTitle: "Lokasjon",
            submitButtonText: "Send inn oppføring",
            submitButtonTextLoading: "Sender inn&hellip;",
            formValidationMessageAlertText: "Følgende felter må fylles ut:",
            selectLocation: "Velg en ${openLink}lokasjon${closeLink} for det du sender inn.",
            emptylatitudeAlertMessage: "Angi et ${openLink}breddegrad${closeLink}skoordinat.",
            emptylongitudeAlertMessage: "Angi et ${openLink}lengdegrad${closeLink}skoordinat.",
            shareUserTitleMessage: "Takk for bidraget!",
            entrySubmitted: "Oppføringen er sendt til kartet.",
            shareThisForm: "Del dette skjemaet",
            shareUserTextMessage: "Be andre om å bidra ved hjelp av følgende alternativer.",
            addAttachmentFailedMessage: "Kan ikke legge til vedlegg i laget",
            addFeatureFailedMessage: "Kan ikke legge til geoobjekt i laget",
            noLayerConfiguredMessage: "Det oppsto en feil under lasting eller søk etter et redigerbart geoobjektslag. Du må legge til et redigerbart geoobjektslag i webkartet for å kunne vise skjemaet og samle inn innsendte skjemaer.",
            placeholderLatitude: "Breddegrad (Y)",
            placeholderLongitude: "Lengdegrad (X)",
            latitude: "Breddegrad",
            longitude: "Lengdegrad",
            findMyLocation: "Finn meg",
            finding: "Lokaliserer&hellip;",
            backToTop: "Tilbake til toppen",
            addressSearchText: "Innsendelsen vil vises her. Du kan dra nålen for å korrigere lokasjonen.",
            shareModalFormText: "Skjemakobling",
            close: "Lukk",
            locationNotFound: "Finner ikke lokasjonen.",
            setLocation: "Angi lokasjon",
            find: "Finn adresse eller sted",
            attachment: "Vedlegg",
            toggleDropdown: "Aktiver/deaktiver rullegardinliste",
            invalidLatLong: "Angi gyldige ${latLink}breddegrads${closeLink}- og ${lngLink}lengdegrad${closeLink}skoordinater.",
            invalidUTM: "Angi gyldige ${openLink}UTM${closeLink}-koordinater.",
            invalidUSNG: "Angi gyldige ${openLink}USNG${closeLink}-koordinater.",
            invalidMGRS: "Angi gyldige ${openLink}MGRS${closeLink}-koordinater.",
            geoformTitleText: "GeoForm",
            domainDefaultText: "Velg&hellip;",
            applyEditsFailedMessage: "Beklager, vi kunne ikke sende inn. Prøv på nytt.",
            requiredFields: "Det finnes noen feil. Korriger feilene nedenfor.",
            requiredField: "(obligatorisk)",
            error: "Feil",
            textRangeHintMessage: "${openStrong}Hint:${closeStrong} Minimumsverdi ${minValue} og maksimumsverdi ${maxValue}",
            dateRangeHintMessage: "${openStrong}Hint:${closeStrong} Laveste dato ${minValue} og høyeste dato ${maxValue}"
        },
        builder: {
            invalidUser: "Beklager, du har ikke tillatelse til å se dette elementet",
            invalidWebmapSelectionAlert: "Det valgte webkartet inneholder ingen gyldige webkart du kan bruke. Legg till et redigerbart geoobjektslag i webkartet for å fortsette.",
            invalidWebmapSelectionAlert2: "Se ${openLink}Hva er en geoobjektstjeneste?${closeLink} hvis du vil ha mer informasjon.",
            selectFieldsText: "Velg fra felter",
            selectThemeText: "Velg tema for skjema",
            webmapText: "Webkart",
            layerText: "Lag",
            detailsText: "Detaljer",
            fieldsText: "Felter",
            styleText: "Stil",
            optionText: "Alternativer",
            previewText: "Forhåndsvisning",
            publishText: "Mangfoldiggjør",
            optionsApplicationText: "Alternativer",
            titleText: "Byggeverktøy",
            descriptionText: "GeoForm er en konfigurerbar mal for skjemabasert dataredigering av en ${link1}geoobjektstjeneste${closeLink}. Med dette programmet kan brukerne angi data via et skjema i stedet for kartets sprettoppvindu og samtidig dra nytte av mulighetene ${link2}webkart${closeLink} og redigerbare geoobjektstjenester gir. Bruk fremgangsmåten nedenfor til å tilpasse og distribuere GeoForm.",
            btnPreviousText: "Forrige",
            btnNextText: "Neste",
            webmapTabTitleText: "Velg et webkart",
            viewWebmap: "Se webkart",
            btnSelectWebmapText: "Velg webkart",
            btnSelectWebmapTextLoading: "Laster inn&hellip;",
            layerTabTitleText: "Velg redigerbart lag",
            selectLayerLabelText: "Lag",
            selectLayerDefaultOptionText: "Velg lag",
            detailsTabTitleText: "Skjemadetaljer",
            detailTitleLabelText: "Tittel",
            detailLogoLabelText: "Logobilde",
            descriptionLabelText: "Hjelpetekst (valgfritt)",
            fieldTabFieldHeaderText: "Felt",
            fieldTabLabelHeaderText: "Etikett",
            fieldTabDisplayTypeHeaderText: "Vis som",
            selectMenuOption: "Velg meny",
            selectRadioOption: "Alternativknapp",
            selectTextOption: "Tekst",
            selectCheckboxOption: "Avmerkingsboks",
            selectMailOption: "E-post",
            selectUrlOption: "URL",
            selectTextAreaOption: "Tekstområde",
            previewApplicationText: "Forhåndsvis applikasjon",
            saveApplicationText: "Lagre applikasjon",
            saveText: "Lagre",
            toggleNavigationText: "Veksle navigasjon",
            formPlaceholderText: "Mitt skjema",
            shareBuilderInProgressTitleMessage: "Publisere GeoForm",
            shareBuilderProgressBarMessage: "Vent litt&hellip;",
            shareBuilderTitleMessage: "Elementet er lagret",
            shareBuilderTextMessage: "Du kan begynne å samle informasjon ved å dele med andre",
            shareModalFormText: "Skjemakobling",
            shareBuilderSuccess: "Ditt GeoForm er oppdatert og publisert.",
            geoformTitleText: "GeoForm",
            layerTabText: "Dette er laget som GeoForm blir bygd fra. Laget må være en geoobjektstjeneste som er aktivert for redigering, med deletillatelser som egner seg for publikummet ditt.",
            detailsTabText: "Bruk Skjemadetaljer-boksene nedenfor for å tilpasse tittelen, legge til en egen logo og gi en kort beskrivelse for GeoForm-publikumet ditt. I beskrivelsen kan du legge til koblinger til andre ressurser, kontaktopplysninger, og til og med sende publikumet ditt til et webkartprogram med alle dataene som er samlet inn med GeoForm.",
            fieldsTabText: "Her kan du velge hvilke felter som skal være synlige for GeoForm-publikummet ditt, redigere merkene de får se og legge til en kort beskrivelse for hjelpe til med datainnskrivingen.",
            styleTabText: "Utform GeoForm med temaene nedenfor etter egne preferanser.",
            publishTabText: "Hvis du er ferdig med å tilpasse GeoForm, lagrer du programmet og begynner delingen med publikum. Du kan alltid gå tilbake til dette byggeverktøyet og gjøre flere tilpasninger basert på tilbakemeldinger.",
            smallHeader: "Bruk liten overskrift",
            pushpinText: "Kartnål",
            doneButtonText: "Se programelement",
            fieldTabPlaceHolderHeaderText: "Hint (valgfritt)",
            attachmentLabelText: "Vedleggsetikett",
            attachmentLabelHint: "Fortell brukerne hvilken type fil som kan legges ved.",
            attachmentDescription: "Beskrivelse av vedlegg",
            attachmentHint: "Du kan om nødvendig angi flere instruksjoner for vedlegg her.",
            jumbotronDescription: "Bootstrap Jumbotron gjør det enkelt å definere formålet med programmet ditt. Dette kan deaktiveres når som helst.",
            shareGeoformText: "Del Geoform",
            shareDescription: "Delingspanelet gjør det enkelt for publikumet ditt å dele GeoForm med andre samarbeidsparter så snart de har sendt inn noe. Dette kan deaktiveres når som helst.",
            defaultMapExtent: "Standard kartutstrekning",
            defaultMapExtentDescription: "Kartet tilbakestilles til standardutstrekningen i webkartet etter innsending. Dette kan deaktiveres når som helst.",
            pushpinOptionsDescription: "Velg blant en lang rekke farger for kartnålen. Fargen bør være annerledes enn fargen på symbolene på kartet, slik at det blir enklere for brukerne å sette innsendingene på kartet.",
            selectLocationText: "Velg lokasjon etter",
            myLocationText: "Min lokasjon",
            searchText: "Søk",
            coordinatesText: "Breddegrads- og lengdegradskoordinater",
            usng: "USNG-koordinater",
            mgrs: "MGRS-koordinater",
            utm: "UTM-koordinater",
            selectLocationSDescription: "La brukere velge en lokasjon ved hjelp av disse metodene."
        }
    })
);