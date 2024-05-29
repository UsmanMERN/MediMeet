import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, ActivityIndicator } from 'react-native';

const { width } = Dimensions.get('window');

const PIXABAY_API_URL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = '44124931-7ab13659e9b2c4289425b095c'; // Replace with your Pixabay API key

export default function Slider() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await fetch(`${PIXABAY_API_URL}?key=${PIXABAY_API_KEY}&q=hospital&image_type=photo&per_page=4`);
            const data = await response.json();
            const imagesData = data.hits.map(item => ({
                uri: item.webformatURL,
                caption: item.tags.split(',')[0] || 'Hospital Image'
            }));
            setImages(imagesData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Our Medical Services</Text>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContent}
            >
                {images.map((image, index) => (
                    <View key={index} style={styles.imageContainer}>
                        <Image
                            source={{ uri: image.uri }}
                            style={styles.image}
                        />
                        <View style={styles.captionContainer}>
                            <Text style={styles.caption}>{image.caption}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 5,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        paddingVertical: 10,
        color: '#333',
    },
    scrollView: {
        width: '100%',
    },
    scrollViewContent: {
        alignItems: 'center',
    },
    imageContainer: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width,
        height: 200,
        resizeMode: 'cover',
    },
    captionContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        alignItems: 'center',
    },
    caption: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
