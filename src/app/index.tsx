import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        style={styles.background}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>

          <View style={styles.top}>
            <Text style={styles.smallTitle}>STUDENT PROFILE</Text>
            <Text style={styles.title}>My Profile</Text>
            <Text style={styles.subtitle}>
              Welcome To My Student Profile
            </Text>
          </View>

          <View style={styles.profile}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>T</Text>
            </View>

            <Text style={styles.name}>Theo Lustico</Text>
            <Text style={styles.course}>BS Computer Science</Text>

            <View style={styles.studentBadge}>
              <Text style={styles.badgeText}>COMPUTER SCIENCE STUDENT</Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>🎓</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Bachelor of Science</Text>
              <Text style={styles.infoSubtitle}>
                Computer Science
              </Text>
            </View>
          </View>

          <View style={styles.sectionTitle}>
            <Text style={styles.sectionText}>Academic Overview</Text>
          </View>

          <View style={styles.statsRow}>

            <View style={styles.statCard}>
              <Text style={styles.statNumber}>5</Text>
              <Text style={styles.statLabel}>Subjects</Text>
              <Text style={styles.statDescription}>This semester</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Projects</Text>
              <Text style={styles.statDescription}>Completed</Text>
            </View>

          </View>

          <View style={styles.sectionTitle}>
            <Text style={styles.sectionText}>Account</Text>
          </View>

          <Pressable style={styles.menuCard}>
            <View style={styles.menuIcon}>
              <Text>👤</Text>
            </View>

            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>Personal Information</Text>
              <Text style={styles.menuDescription}>
                View your student information
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>

          <Pressable style={styles.menuCard}>
            <View style={styles.menuIcon}>
              <Text>⚙️</Text>
            </View>

            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>Settings</Text>
              <Text style={styles.menuDescription}>
                Manage your preferences
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>

          <View style={styles.footer}>
            <Text style={styles.footerTitle}>Student Profile</Text>
            <Text style={styles.footerText}>
              Static App UI • React Native
            </Text>
          </View>

        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#023c87',
  },

  scroll: {
    flexGrow: 1,
  },

  container: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 45,
    paddingBottom: 30,
  },

  top: {
    marginBottom: 25,
    alignItems: 'center',
  },

  smallTitle: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    color: '#fdfdfd',
    marginBottom: 7,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
  },

  subtitle: {
    fontSize: 14,
    color: '#ffffff',
    marginTop: 5,
  },

  profile: {
    alignItems: 'center',
    backgroundColor: '#033a70',
    borderRadius: 24,
    paddingVertical: 28,
    paddingHorizontal: 20,
    marginBottom: 16,
  },

  avatar: {
    width: 95,
    height: 95,
    borderRadius: 48,
    backgroundColor: '#6b7891',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '800',
  },

  name: {
    fontSize: 25,
    fontWeight: '800',
    color: '#ffffff',
  },

  course: {
    fontSize: 15,
    color: '#ffffff',
    marginTop: 4,
  },

  studentBadge: {
    backgroundColor: '#0c144e',
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 14,
  },

  badgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: 0.8,
  },

  infoCard: {
    backgroundColor: '#0b1834',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#231867',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 22,
  },

  infoContent: {
    marginLeft: 14,
  },

  infoTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  infoSubtitle: {
    color: '#AEB6C7',
    fontSize: 13,
    marginTop: 3,
  },

  sectionTitle: {
    marginBottom: 10,
    marginLeft: 3,
  },

  sectionText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#ffffff',
  },

  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#1e0225',
    borderRadius: 20,
    padding: 18,
  },

  statNumber: {
    fontSize: 30,
    fontWeight: '800',
    color: '#ffffff',
  },

  statLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 2,
  },

  statDescription: {
    fontSize: 12,
    color: '#8A91A0',
    marginTop: 4,
  },

  menuCard: {
    backgroundColor: '#1e096a',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  menuIcon: {
    width: 45,
    height: 45,
    borderRadius: 13,
    backgroundColor: '#F0F1FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuContent: {
    flex: 1,
    marginLeft: 13,
  },

  menuTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ffffff',
  },

  menuDescription: {
    fontSize: 12,
    color: '#8A91A0',
    marginTop: 3,
  },

  arrow: {
    fontSize: 27,
    color: '#A0A7B4',
  },

  footer: {
    alignItems: 'center',
    paddingTop: 25,
  },

  footerTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ffffff',
  },

  footerText: {
    fontSize: 11,
    color: '#ffffff',
    marginTop: 3,
  },
});