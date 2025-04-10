"use client";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const darkTheme = {
  background: "#121212",
  textColor: "#fff",
  cardBackground: "#1e1e1e",
};

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.textColor};
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* Ombre autour du conteneur */
  text-align: center;
  transition: background 0.3s, color 0.3s;
  margin-top: 50px;
`;

const ProfileImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto 20px;
  overflow: hidden;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.textColor};
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Ombre au survol */
  
  &:hover {
    transform: scale(1.1);
  }
`;

const ProfileImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Section = styled.section`
  margin-bottom: 25px;
  text-align: left;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease-out forwards;
`;

const SectionTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 22px;
  color: ${({ theme }) => theme.textColor};
`;

const Button = styled.button`
  padding: 12px 20px;
  margin: 10px;
  border: none;
  border-radius: 30px;
  background: linear-gradient(45deg, #0070f3, #00c6ff); /* Bouton avec dégradé */
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background: linear-gradient(45deg, #0056b3, #00aaff); /* Changement de couleur au survol */
    transform: scale(1.05);
  }
`;

export default function Home() {
  const [theme] = useState(darkTheme); 
  const router = useRouter();

  const handleClick = () => {
    router.push('/page2'); // Assurez-vous que cela pointe bien vers /page2
  };

  return (                        
    <ThemeProvider theme={theme}>
      <Container>
        <ProfileImageWrapper>
          <ProfileImage src="/profile.jpg" alt="Photo de profil" width={150} height={150} />
        </ProfileImageWrapper>
        <h1>Jean-Baptiste Marcant</h1>
        <p>Étudiant en 1ère année à Enigma</p>

        <Section>
          <SectionTitle>Formation</SectionTitle>
          <ul>
            <li><strong>Enigma</strong> - 1ère année en ingénierie informatique (2024-2025)</li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>Compétences</SectionTitle>
          <ul>
            <li>Python, C, JavaScript, Lua</li>
            <li>HTML, CSS, React</li>
            <li>Algorithmes et structures de données</li>
            <li>Travail en équipe, persévérant</li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>Langues</SectionTitle>
          <ul>
            <li>Français - Courant</li>
            <li>Anglais - Intermédiaire</li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>Centre d&apos;intérêt</SectionTitle>
          <ul>
            <li>Création de script</li>
            <li>Jeux vidéos</li>
            <li>Nouvelles technologies</li>
            <li>Projets entre amis</li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>Expériences professionnelles</SectionTitle>
          <ul>
            <li>Stage au Crédit mutuel Verlinghem juin 2022</li>
            <li>Créations d&apos;un jeu en lua :</li>
            <li>- Savoir travailler en équipe sur un projet</li>
            <li>- Assurer la sécurité du jeu &quot;anticheat&quot;</li>
            <li>- Savoir coder et apprendre de mes erreurs</li>
            <li>- Aider l&apos;autre lorsqu&apos;une difficulté est rencontrée</li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>Contact</SectionTitle>
          <p>Email : jbmarcant@outlook.com</p>
          <p>Téléphone : 07 81 86 58 76</p>
        </Section>

        <Button onClick={handleClick}>📧 Me contacter</Button>
      </Container>
    </ThemeProvider>
  );
}
