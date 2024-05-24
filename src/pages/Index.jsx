import { Container, VStack, Button, Heading, useColorMode, extendTheme, ChakraProvider } from "@chakra-ui/react";
import { FaBook, FaTools, FaChartLine } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

// Define the custom theme
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "black",
        color: "white",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          bg: "goldenrod",
        },
      },
      variants: {
        solid: {
          bg: "gold",
          color: "black",
        },
      },
    },
  },
});

const HomeworkListPage = () => (
  <Container centerContent>
    <Heading>Homework List</Heading>
    {/* Add your Homework List content here */}
  </Container>
);

const InteractiveToolsPage = () => (
  <Container centerContent>
    <Heading>Interactive Learning Tools</Heading>
    {/* Add your Interactive Learning Tools content here */}
  </Container>
);

const PerformancePage = () => (
  <Container centerContent>
    <Heading>Performance Tracking</Heading>
    {/* Add your Performance Tracking content here */}
  </Container>
);

const StudentHomePage = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Heading>Student Home</Heading>
        <Button leftIcon={<FaBook />} onClick={() => navigate("/homework")}>
          View Homework
        </Button>
        <Button leftIcon={<FaTools />} onClick={() => navigate("/interactive-tools")}>
          Interactive Learning Tools
        </Button>
        <Button leftIcon={<FaChartLine />} onClick={() => navigate("/performance")}>
          Performance Tracking
        </Button>
      </VStack>
    </Container>
  );
};

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<StudentHomePage />} />
          <Route path="/homework" element={<HomeworkListPage />} />
          <Route path="/interactive-tools" element={<InteractiveToolsPage />} />
          <Route path="/performance" element={<PerformancePage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default Index;
