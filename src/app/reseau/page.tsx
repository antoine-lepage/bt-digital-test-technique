"use client";

import {
    Container,
    Hero,
    Section,
    Text,
    TextMarkup,
    Title,
    TitleMarkup,
    TypographyBold
} from "@bytel/trilogy-react";
import {Align, Column, Columns, Image, RadiusValues, Tab, TabList, TabPanel, TabPanels, Tabs} from "@trilogy-ds/react";
import Internet from "@/app/reseau/internet";
import Mobile from "@/app/reseau/mobile";

export default function Page() {
    return (
        <>
            <Section>
                <Text>Header</Text>
            </Section>
            <Hero backgroundColor={'MAIN'}>
                <Container>
                    <Columns verticalAlign={"ALIGNED_CENTER"}>
                        <Column>
                            <Title level={1} inverted markup={TitleMarkup.H1}> {/* Force le H1 (recommandé) */}
                                Les réseaux m
                                <Title markup={TitleMarkup.SPAN} className={"has-variant"}>o</Title>{/* Le o penché */}
                                bile et Internet Bouygues Telecom
                            </Title>
                            <Text inverted>
                                Pour vous rapprocher de ceux qui comptent,
                                nous développons et améliorons sans cesse nos réseaux et proposons aujourd'hui le
                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}> WIFI N°1</Text>
                                <Text markup={TextMarkup.SPAN} level={4} style={{"vertical-align": "top"}}>(1) </Text>
                                 et l'
                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>Internet mobile N°1</Text>
                                <Text markup={TextMarkup.SPAN} level={4} style={{"vertical-align": "top"}}>(2) </Text>
                                en France en
                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}> 2025 </Text>
                                selon nPerf. Notre objectif :
                                vous proposer toujours la
                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}> meilleure qualité de réseau possible</Text>
                                , tant sur le mobile
                                que sur le fixe.
                            </Text>
                        </Column>
                        <Column>
                            <Image radius={RadiusValues.MEDIUM}
                                   src="/_CMS_LANDING_PAGES_hub_ensemble-30-ans@2x.webp"
                                   align={"ALIGNED_CENTER"}/>
                        </Column>
                    </Columns>
                </Container>
            </Hero>
            <Tabs>
                <TabList align={Align.CENTER}>
                    <Tab label="Internet" />
                    <Tab label="Mobile" />
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Internet></Internet>
                    </TabPanel>
                    <TabPanel>
                        <Mobile></Mobile>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Section>
                <Text>Footer</Text>
            </Section>
        </>
    )
}