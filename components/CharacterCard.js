import {View, Text, StyleSheet, Platform, Image} from 'react-native'

const getImageIcon = (type) => {
    switch (type.toLowerCase()) {
        case "speed":
            return {borderColor: "#b1f0fc", imageIcon: require("./../assets/speed_icon.png")};
        case "health":
            return {borderColor: "#b5fcb1", imageIcon: require("./../assets/health_icon.png")};
        case "strength":
            return {borderColor: "#fcb1b1", imageIcon: require("./../assets/strength_icon.png")};
        default:
            return {borderColor: "#f5f5f5", imageIcon: NaN};
    } 
}

export default function CharacterCard({
    name,
    image,
    type,
    hp,
    skills,
    weakness,
}) {

        const {borderColor, imageIcon} = getImageIcon(type);
    return (
        <View style={styles.card}>
            {/* Block One */}
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>♡{hp}</Text>
            </View>
            {/* Block Two*/}
            <Image style={styles.image} source={image} accessibilityLabel={`${name} character`} />

            {/* Block Three */}
            <View style = {styles.typeContainer}>
                <View style = {[styles.typeBadge, {borderColor}]}>
                    <Image style={styles.type_icon} source={imageIcon} accessibilityLabel={`${type} Typing`} />
                    <Text style = {styles.type_text}>{type.toUpperCase()}</Text>
                </View>
            </View>

            {/* Block Four */}
            <View style={styles.skillContainer}>
                <Text style={styles.skillText}>Skills: {skills.join(", ")}</Text>
            </View>

            {/* Block Five */}
            <View style={styles.weaknessContainer}>
                <Text style={styles.weaknessText}>Weaknesses: {weakness.join(", ")}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor:"white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 12,
        ...Platform.select({
            ios: {
                shadowOffset: {width:2, height:2},
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            }
        })
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    name: {
        fontSize: 25,
        fontWeight: "bold",
    },
    hp: {
        fontSize: 22,
    },
    image: {
        width: "100%",
        height: 400,
        resizeMode:"contain"
    },
    typeContainer: {
        marginBottom: 40,
        alignItems: "center"
    }, 
    typeBadge: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius:20,
        borderWidth:4,
        padding: 8,
    }, 
    type_icon: {
        width: 25,
        height: 25,
        resizeMode:"contain",
    },
    type_text: {
        marginLeft: 12,
        fontSize: 15,
        fontWeight: "bold"
    },
    skillContainer: {
        marginBottom: 16,
    },
    skillText: {
        fontSize: 22,
        fontWeight: "bold",
    },
    weaknessContainer: {
        marginBottom: 8,
    },
    weaknessText: {
        fontSize: 22,
        fontWeight: "bold",
    }
})