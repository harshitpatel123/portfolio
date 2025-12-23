import './globals.css'
import GlobalCursor from '../components/GlobalCursor'

export const metadata = {
  title: 'Harshit Patel - Full Stack Developer',
  description: 'Portfolio of Harshit Patel, a passionate Full Stack Developer specializing in MERN stack development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="animated-bg" style={{ cursor: 'none' }}>
        <GlobalCursor />
        {children}
      </body>
    </html>
  )
}