import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { AuthContext } from '../context';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
  } from 'react-native-paper';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';

export default function SideScreenProviderContent({ navigation, props }) {
    const { switchAccount, signOut } = React.useContext(AuthContext)

    return (
        <View style={styles.drawerContent}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                <View style={{backgroundColor: 'rgba(95, 135, 189,1)', paddingBottom: 0}}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection: 'row', marginTop: 15, marginBottom:5}}>
                    <Avatar.Image 
                        source={require('../assets/profile_liam.jpg')}
                        size={50}
                        />
                        <View style={{marginLeft: 15, flexDirection: 'column'}}>
                        <Title style={styles.title}>Liam Mills</Title>
                        <Caption style={styles.caption}>Tesla Model X</Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.item}>
                    <DrawerItem
                        icon = {({color,size}) => (
                            <Icon 
                            name="replay" 
                            color={ color }
                            size={ size }
                            />
                        )}
                        label="Change to Driver"
                        onPress={() => Alert.alert(
                            "Change Interface",
                            "You are about to change to the driver interface.",
                        [
                          {
                            text: "Cancel",
                            style: "cancel"
                          },
                          { text: "OK", onPress: () => switchAccount() }
                        ],
                        { cancelable: false }
                      )}
                        />
                </Drawer.Section>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem style={styles.item}
                    icon = {({color,size}) => (
                        <Icon 
                        name="home" 
                        color={ color }
                        size={ size }
                        />
                    )}
                    label="Home"
                    onPress={() => {navigation.navigate('Bookings')}}
                    />
                    <DrawerItem style={styles.item}
                    icon = {({color,size}) => (
                        <Icon 
                        name="add" 
                        color={ color }
                        size={ size }
                        />
                    )}
                    label="List a Station"
                    onPress={() => {navigation.navigate('List a Station')}}
                    />
                    <DrawerItem style={styles.item}
                    icon = {({color,size}) => (
                        <Icon 
                        name="star" 
                        color={ color }
                        size={ size }
                        />
                    )}
                    label="Reviews"
                    onPress={() => {navigation.navigate('Reviews')}}
                    />
                    <DrawerItem style={styles.item}
                    icon = {({color,size}) => (
                        <Icon 
                        name="person-outline" 
                        color={ color }
                        size={ size }
                        />
                    )}
                    label="Personal Details"
                    onPress={() => {navigation.navigate('Personal Details')}}
                    />
                    <DrawerItem style={styles.item}
                    icon = {({color,size}) => (
                        <Icon 
                        name="payment" 
                        color={ color }
                        size={ size }
                        />
                    )}
                    label="Payment Details"
                    onPress={() => {navigation.navigate('Payment Details')}}
                    />
                    <DrawerItem style={styles.item}
                    icon = {({color,size}) => (
                        <Icon 
                        name="settings" 
                        color={ color }
                        size={ size }
                        />
                    )}
                    label="Settings"
                    onPress={() => {navigation.navigate('Settings')}}
                    />
                    <DrawerItem style={styles.item}
                    icon = {({color,size}) => (
                        <Icon 
                        name="help-outline" 
                        color={ color }
                        size={ size }
                        />
                    )}
                    label="FAQ"
                    onPress={() => {navigation.navigate('FAQ')}}
                    />
                </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem  style={{padding:5, borderTopWidth:1, borderTopColor: '#ddd'}}
                icon = {({color,size}) => (
                    <Icon 
                    name="exit-to-app" 
                    color={ color }
                    size={ size }
                    />
                )}
                label="Sign Out"
                onPress={() => Alert.alert(
                    "Sign Out",
                    "Are you sure you want to sign out?",
                [
                  {
                    text: "No",
                    style: "cancel"
                  },
                  { text: "Yes", onPress: () => signOut() }
                ],
                { cancelable: false }
              )}
                />
            </Drawer.Section>
        </View>
    );
}

    
const styles = StyleSheet.create({
    drawerContent: {
        flex:1,
        backgroundColor: 'rgba(95, 135, 189,1)'
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    item: {
        height: 45,
        justifyContent: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    drawerSection: {
        borderTopWidth: 1,
        borderTopColor: '#f4f4f4',
        backgroundColor: '#eee',
        paddingBottom: 150
    },
    bottomDrawerSection: {
        paddingBottom: 0,
        //borderTopColor: 'rgba(95, 135, 189,0.5)',
        //borderTopWidth: 1,
        backgroundColor: '#eee'
    },
});