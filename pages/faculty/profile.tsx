import { Center, Text } from "@chakra-ui/react";
import { AuthProvider } from "../../components/AuthProvider";
import { Layout } from "../../components/Layout";

export default function FacultyProfilePage() {
  return (
    <AuthProvider role="faculty">
      <Layout>
        <Center w="100%" h="100%" py="20">
          <Text fontSize="48" fontWeight="extrabold">
            Faculty Profile
          </Text>
        </Center>
      </Layout>
    </AuthProvider>
  );
}
