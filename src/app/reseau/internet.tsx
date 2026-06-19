import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Align,
    Box,
    BoxContent,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ButtonVariant,
    Card,
    CardContent,
    CardImage,
    Column,
    Columns,
    Container,
    FlexBox,
    GapSize,
    Icon,
    IconColor,
    IconName,
    IconSize,
    Image,
    Justify,
    Link,
    RadiusValues,
    Row,
    Rows,
    Section,
    Text,
    TextMarkup,
    Title,
    TitleLevels,
    TrilogyColor,
    TypographyAlign,
    TypographyBold,
    TypographyColor
} from "@trilogy-ds/react";
import {TitleMarkup} from "@bytel/trilogy-react";

export default function Internet() {
    return (
        <>
            <Section backgroundColor={TrilogyColor.MAIN_FADE}>
                <Container>
                    <Box>
                        <BoxContent backgroundColor="MAIN">
                            <FlexBox align={{ mobile: Align.START, tablet: Align.CENTER }} justify={ Justify.CENTER }>
                                <Icon size={IconSize.LARGE} name={IconName.INFOS_CIRCLE} color={IconColor.WHITE}></Icon>
                                <FlexBox align={Align.START} direction={{ mobile: "row", tablet: "column"}}>
                                    <Text marginless markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD} inverted>
                                        Concernés par l'arrêt de l'ADSL ?
                                    </Text>
                                    <Text marginless markup={TextMarkup.SPAN} inverted>
                                        Progressivement, la France va couper l'accès technique et commercial
                                        au réseau ADSL.
                                    </Text>
                                </FlexBox>
                                <Button variant="CONVERSION"> En savoir plus </Button>
                            </FlexBox>
                        </BoxContent>
                    </Box>
                </Container>
            </Section>
            <Section backgroundColor={TrilogyColor.MAIN_FADE}>
                <Container>
                    <Title level={2}>
                        Profitez du meilleur de la connexion
                        <Title markup={TitleMarkup.SPAN} level={2} typo={TypographyColor.TEXT_INFO}> pour toute la famille</Title>
                    </Title>
                    <Rows gap={GapSize.TEN}>
                        <Row>
                            <Columns gap={GapSize.TEN}>
                                <Column size={6}>
                                    <Image
                                        radius={RadiusValues.MEDIUM}
                                        src="/_CMS_LANDING_PAGES_hub_ensemble-30-ans@2x.webp" />
                                </Column>
                                <Column size={6} align={Align.START} verticalAlign={Align.CENTER}>
                                    <Rows>
                                        <Row>
                                            <Image src={"/globe.svg"} height={50}/>
                                        </Row>
                                        <Row>
                                            <Title level={2}>
                                                Jamais 6 sans 7.
                                                <br/>
                                                On est {' '}
                                                <Title markup={TitleMarkup.SPAN} level={2} typo={TypographyColor.TEXT_INFO}>
                                                    WiFi N°1
                                                </Title>
                                                {' '}pour la 7ème fois
                                            </Title>
                                        </Row>
                                        <Row>
                                            <Text>
                                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                                    Pour la 7ème fois consécutive
                                                </Text>
                                                , Bouygues Telecom a été classé WiFi N°1 par le {' '}
                                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                                    baromètre nPerf
                                                </Text>
                                                {' '}sur l'année 2025. Le WiFi Bouygues Telecom est classé{' '}
                                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                                    premier sur tous les indicateurs
                                                </Text>
                                                {' '}qui composent le score final du baromètre (
                                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                                    débits descendants, debits montants, latence, navigation et streaming
                                                    vidéo sur YouTube
                                                </Text>
                                                ).
                                            </Text>
                                        </Row>
                                        <Row>
                                            <Link>En savoir plus</Link>
                                        </Row>
                                    </Rows>
                                </Column>
                            </Columns>
                        </Row>
                        <Row>
                            <Columns gap={GapSize.TEN}>
                                <Column size={6} align={Align.START} verticalAlign={Align.CENTER}>
                                    <Rows>
                                        <Row>
                                            <Title level={2}>
                                                La fibre, pour surfer et télécharger{' '}
                                                <Title markup={TitleMarkup.SPAN} level={2} typo={TypographyColor.TEXT_INFO}>
                                                    à toute vitesse
                                                </Title>
                                            </Title>
                                        </Row>
                                        <Row>
                                            <Text>
                                                Grâce à la {' '}
                                                <Link inline={true}>fibre</Link>
                                                {' '}et son {' '}
                                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                                    très haut débit
                                                </Text>
                                                , vous pouvez désormais profiter d'une {' '}
                                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                                    connexion internet puissante
                                                </Text>
                                                {' '}pour tous vos usages (streaming, téléchargement, jeu en ligne,
                                                visioconférence...)  {' '}
                                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                                    sur tous les supports
                                                </Text>
                                                {' '}et pour {' '}
                                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                                    toute la famille
                                                </Text>
                                                .
                                            </Text>
                                        </Row>
                                        <Row>
                                            <Link>Tout savoir sur la fibre</Link>
                                        </Row>
                                    </Rows>
                                </Column>
                                <Column size={6}>
                                    <Image
                                        radius={RadiusValues.MEDIUM}
                                        src="/_CMS_LANDING_PAGES_hub_ensemble-30-ans@2x.webp" />
                                </Column>
                            </Columns>
                        </Row>
                        <Row>
                            <Columns gap={GapSize.TEN}>
                                <Column size={6}>
                                    <Image
                                        radius={RadiusValues.MEDIUM}
                                        src="/_CMS_LANDING_PAGES_hub_ensemble-30-ans@2x.webp" />
                                </Column>
                                <Column size={6} align={Align.START} verticalAlign={Align.CENTER}>
                                    <Rows>
                                        <Row>
                                            <Title level={2}>
                                                Bbox WiFi 7 XT,{' '}
                                                <Title markup={TitleMarkup.SPAN} level={2} typo={TypographyColor.TEXT_INFO}>
                                                    la puissance
                                                </Title>
                                                {' '}s'invite chez vous
                                            </Title>
                                        </Row>
                                        <Row>
                                            <Text>
                                                Découvrez notre nouvelle {' '}
                                                <Link inline={true}>Bbox WiFi 7 XT</Link>
                                                {' '}tri-bande, la{' '}
                                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                                    1ère box certifiée WiFi 7
                                                </Text>
                                                {' '}en France. Avec des{' '}
                                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                                    débits exceptionnels jusqu'à 8 Gb/s
                                                </Text>
                                                {' '}en envoi et en téléchargement, une{' '}
                                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                                    stabilité renforcée
                                                </Text>
                                                {' '}et une{' '}
                                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                                    latence réduite
                                                </Text>
                                                , profitez d'une{' '}
                                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                                    expérience en ligne optimale
                                                </Text>
                                                {' '}pour tous vos usages.
                                            </Text>
                                        </Row>
                                        <Row>
                                            <Link>Découvrir la Bbox WiFi 7 XT</Link>
                                        </Row>
                                    </Rows>
                                </Column>
                            </Columns>
                        </Row>
                    </Rows>
                </Container>
            </Section>
            <Section backgroundColor={TrilogyColor.INFO_FADE}>
                <Container>
                    <Title level={2}>
                        Nos offres 5G box et 4G box
                    </Title>
                    <Columns multiline>
                        <Column size={6}>
                            <Card fullheight={true} >
                                <CardImage src="/_CMS_LANDING_PAGES_hub_ensemble-30-ans@2x.webp" />
                                <CardContent className={"has-text-left"}>
                                    <Rows>
                                        <Row>
                                            <Title level={4}> La 5G box </Title>
                                            <Text>
                                                Avec la {' '}
                                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                                    5G box sans engagement
                                                </Text>
                                                , profiter du {' '}
                                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                                    haut débit et de la TV
                                                </Text>
                                                {' '} n'a jamais été aussi simple ! Grâce à la vitesse de la {' '}
                                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                                    5G
                                                </Text>
                                                , dites adieu aux coupures et aux ralentissements à la maison.
                                            </Text>
                                        </Row>
                                        <Row narrow>
                                            <Button variant="PRIMARY">
                                                En profiter
                                            </Button>
                                        </Row>
                                    </Rows>
                                </CardContent>
                            </Card>
                        </Column>
                        <Column size={6}>
                            <Card fullheight={true}>
                                <CardImage src="/_CMS_LANDING_PAGES_hub_ensemble-30-ans@2x.webp" />
                                <CardContent className={"has-text-left"}>
                                    <Rows>
                                        <Row>
                                            <Title level={4}>La 4G box</Title>
                                            <Text>
                                                Votre connexion ADSL est trop lente ? Profitez d'une {' '}
                                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                                    connexion rapide et fluide
                                                </Text>
                                                {' '} chez vous avec la {' '}
                                                <Text markup={TextMarkup.SPAN} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                                    4G box sans engagement
                                                </Text>
                                                .
                                            </Text>
                                        </Row>
                                        <Row narrow>
                                            <Button variant="PRIMARY">
                                                En profiter
                                            </Button>
                                        </Row>
                                    </Rows>
                                </CardContent>
                            </Card>
                        </Column>
                    </Columns>
                </Container>
            </Section>
            <Section backgroundColor={TrilogyColor.INFO}>
                <Container>
                    <Title level={2} inverted>
                        WiFi 7 : Les actus et conseils à ne pas manquer
                    </Title>
                    <Columns multiline>
                        <Column size={4}>
                            <Card fullheight={true} >
                                <CardImage src="/_CMS_LANDING_PAGES_hub_ensemble-30-ans@2x.webp" />
                                <CardContent className={"has-text-left"}>
                                    <Rows>
                                        <Row>
                                            <Title level={5}> C'est quoi le WiFi 7 ? </Title>
                                        </Row>
                                        <Row narrow>
                                            <Link> On vous explique en vidéo </Link>
                                        </Row>
                                    </Rows>
                                </CardContent>
                            </Card>
                        </Column>
                        <Column size={4}>
                            <Card fullheight={true}>
                                <CardImage src="/_CMS_LANDING_PAGES_hub_ensemble-30-ans@2x.webp" />
                                <CardContent className={"has-text-left"}>
                                    <Rows>
                                        <Row>
                                            <Title level={5}>
                                                Découvrez la nouvelle Bbox WiFi 7 XT par Bouygues Telecom
                                            </Title>
                                        </Row>
                                        <Row narrow>
                                            <Link>Découvrir la Bbox WiFi 7 XT</Link>
                                        </Row>
                                    </Rows>
                                </CardContent>
                            </Card>
                        </Column>
                        <Column size={4}>
                            <Card fullheight={true}>
                                <CardImage src="/_CMS_LANDING_PAGES_hub_ensemble-30-ans@2x.webp" />
                                <CardContent className={"has-text-left"}>
                                    <Rows>
                                        <Row>
                                            <Title level={5}>
                                                WiFI 7 : quels téléphones sont compatibles ?
                                            </Title>
                                        </Row>
                                        <Row narrow>
                                            <Link> Voir les smartphones compatibles </Link>
                                        </Row>
                                    </Rows>
                                </CardContent>
                            </Card>
                        </Column>
                    </Columns>
                    <Button variant={ButtonVariant.SECONDARY}>
                        Voir toutes les actualités
                    </Button>
                </Container>
            </Section>
            <Section backgroundColor={TrilogyColor.MAIN_FADE}>
                <Container>
                    <Title level={TitleLevels.TWO}>
                        Toutes vos questions sur les réseaux Bouygues Telecom
                    </Title>
                    <Accordion>
                        <AccordionItem open>
                            <AccordionHeader>
                                <Text>Comment améliorer son réseau internet ?</Text>
                            </AccordionHeader>
                            <AccordionBody>
                                <Text typo={TypographyAlign.TEXT_LEFT}>
                                    Si vous ne bénéficiez pas encore de la fibre, n'hésitez pas à tester votre
                                    éligibilité dès maintenant. La fibre offre en effet une puissance de connexion bien
                                    supérieure à l'ADSL. Pour bénéficier du meilleur des WiFi partout dans la maison,
                                    vous pouvez profiter dès maintenant du WiFi 7, le WiFi dernière génération. Enfin,
                                    pour optimiser votre connexion Internet, Bouygues Telecom propose un Diagnostic
                                    WiFi, accessible via l'espace client.
                                </Text>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader>
                                <Text>Comment se connecter à un réseau internet ou mobile</Text>
                            </AccordionHeader>
                            <AccordionBody>
                                <Text  typo={TypographyAlign.TEXT_LEFT}>Just Google it</Text>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader>
                                <Text>Comment sécuriser son réseau internet ?</Text>
                            </AccordionHeader>
                            <AccordionBody>
                                <Text typo={TypographyAlign.TEXT_LEFT}>En débranchant la box</Text>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader>
                                <Text>Quel est le meilleur réseau mobile ?</Text>
                            </AccordionHeader>
                            <AccordionBody>
                                <Text typo={TypographyAlign.TEXT_LEFT}>
                                    Free... Non, sérieusement, Bouygues Telecom, évidemment
                                </Text>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </Container>
            </Section>
            <Section>
                <Container>
                    <Breadcrumb>
                        <BreadcrumbItem> Accueil </BreadcrumbItem>
                        <BreadcrumbItem active> Réseau </BreadcrumbItem>
                    </Breadcrumb>
                    <Accordion>
                        <AccordionItem>
                            <AccordionHeader>
                                <Text>Mentions légales</Text>
                            </AccordionHeader>
                            <AccordionBody>
                                <Text typo={TypographyAlign.TEXT_LEFT}>Si ça casses, contactes le support</Text>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </Container>
            </Section>
        </>
    )
}