// import React from 'react';
// import { ScrollView, StyleSheet, View } from 'react-native';
// // import Header from '../../components/frontend/Header';
// import Colors from '../../utils/Colors';
// // import CourseList from '../../components/frontend/CourseList';
// // import CourseProgress from '../../components/frontend/CourseProgress';
// import { useAuthContext } from '../../context/AuthContext';

// const Home = () => {
//     const { points } = useAuthContext()
//     return (
//         <>
//             <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
//                 <View style={styles.headerContainer}>
//                     {/* <Header /> */}
//                 </View>
//                 <View style={{ marginTop: -90 }}>
//                     {/* <CourseProgress level="Advance" textColor={Colors.WHITE} horizontal={true} cardWidth={225} /> */}
//                 </View>
//                 {/* <CourseList level="Basic" textColor={points < 0 ? Colors.WHITE : null} />
//                 <CourseList level="Moderate" />
//                 <CourseList level="Advance" /> */}
//             </ScrollView>
//         </>
//     );
// };

// const styles = StyleSheet.create({
//     headerContainer: {
//         backgroundColor: Colors.PRIMARY,
//         height: 250,
//         padding: 15
//     }
// });

// export default Home;
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, 👋</Text>
        <TextInput style={styles.searchBar} placeholder="Search" />
      </View>
      <Image
        style={styles.banner}
        source={{ uri: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yJTIwYXBwb2ludG1lbnR8ZW58MHx8MHx8fDA%3D' }}
      />
      <Text style={styles.sectionTitle}>Doctor Speciality</Text>
      <View style={styles.specialityContainer}>
        <TouchableOpacity style={styles.speciality}>
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.icon} />
          <Text>Dentist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.speciality}>
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.icon} />
          <Text>Cardiologist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.speciality}>
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.icon} />
          <Text>Orthopedic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.speciality}>
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.icon} />
          <Text>Neurologist</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Our Premium Hospitals</Text>
      <View style={styles.hospitalsContainer}>
        <View style={styles.hospitalCard}>
          <Image
            style={styles.hospitalImage}
            source={{ uri: 'https://via.placeholder.com/400x200' }}
          />
          <Text style={styles.hospitalTitle}>One Drive Hospital</Text>
          <Text>28031 Carrington Trace Drive, Cornelius 28117</Text>
        </View>
        <View style={styles.hospitalCard}>
          <Image
            style={styles.hospitalImage}
            source={{ uri: 'https://via.placeholder.com/400x200' }}
          />
          <Text style={styles.hospitalTitle}>ABC Star Hospital</Text>
          <Text>658 N Charleston Drive, Cornelius 28117</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 20,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  banner: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  specialityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  speciality: {
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  hospitalsContainer: {
    marginBottom: 20,
  },
  hospitalCard: {
    marginBottom: 20,
  },
  hospitalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  hospitalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default HomeScreen;
