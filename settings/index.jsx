function mySettings(props) {
    return (
        <Page>
            <Section title={<Text bold align="center">Colors</Text>}>
                <Text>Active</Text>
                <ColorSelect
                    settingsKey="color.active"
                    colors={[
                        {color: 'white'},
                        {color: 'orangered'},
                        {color: 'lawngreen'}
                    ]}
                />
                <Text>Inactive</Text>
                <ColorSelect
                    settingsKey="color.inactive"
                    colors={[
                        {color: 'slategray'},
                        {color: 'gray'},
                        {color: 'silver'}
                    ]}
                />
            </Section>
            <Section title="About">
                <Text>0b11011 is free, ads-free and open-source.</Text>
                <Link source="https://github.com/norman27/fitbit-clock-0b11011">Source code on GitHub</Link>
            </Section>
        </Page>
    );
}

registerSettingsPage(mySettings);