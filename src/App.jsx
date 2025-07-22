import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Star, Heart, BookOpen, Calculator, ArrowLeft, ArrowRight, Volume2, Keyboard } from 'lucide-react'
import dailyContent from './content.js'
import './App.css'

// Komponenta za virtuelnu tastaturu
const VirtualKeyboard = ({ onKeyPress, onBackspace, onClear, isVisible, onToggle }) => {
  if (!isVisible) {
    return (
      <Button 
        onClick={onToggle}
        variant="outline"
        className="mt-2 flex items-center gap-2"
      >
        <Keyboard className="w-4 h-4" />
        Prikaži tastaturu
      </Button>
    )
  }

  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['0', '⌫', 'C']
  ]

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">Virtuelna tastatura</span>
        <Button 
          onClick={onToggle}
          variant="ghost"
          size="sm"
        >
          Sakrij
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {keys.flat().map((key, index) => (
          <Button
            key={index}
            onClick={() => {
              if (key === '⌫') onBackspace()
              else if (key === 'C') onClear()
              else onKeyPress(key)
            }}
            variant="outline"
            className="h-12 text-lg font-semibold"
          >
            {key}
          </Button>
        ))}
      </div>
    </div>
  )
}

// TTS funkcija (simulacija)
const speakText = (text) => {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'hr-HR' // Hrvatski jezik
    utterance.rate = 0.8
    utterance.pitch = 1.2
    speechSynthesis.speak(utterance)
  } else {
    console.log('TTS:', text)
  }
}

// Komponenta za matematičke zadatke
const MathSection = ({ onComplete, progress, setProgress, mathTasks }) => {
  const [currentTask, setCurrentTask] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [stars, setStars] = useState(0)
  const [completedTasks, setCompletedTasks] = useState([])
  const [showKeyboard, setShowKeyboard] = useState(false)

  const currentTaskData = mathTasks[currentTask]

  const handleAnswer = () => {
    const answer = parseInt(userAnswer)
    if (answer === currentTaskData.answer) {
      // Tačan odgovor
      setStars(prev => prev + 1)
      setCompletedTasks(prev => [...prev, currentTask])
      setProgress(prev => prev + (100 / mathTasks.length))
      
      // Zvuk za tačan odgovor i TTS
      speakText('Bravo! Tačan odgovor!')
      console.log('BRAVO! 🎉')
      
      if (currentTask < mathTasks.length - 1) {
        setCurrentTask(prev => prev + 1)
        setUserAnswer('')
        setAttempts(0)
        setShowHint(false)
      } else {
        onComplete()
      }
    } else {
      // Pogrešan odgovor
      setAttempts(prev => prev + 1)
      if (attempts >= 1) {
        setShowHint(true)
        // TTS hint
        speakText(currentTaskData.hint)
        console.log('Hint:', currentTaskData.hint)
      }
      if (attempts >= 2) {
        // Prelazi na sljedeći zadatak nakon 3 pokušaja
        if (currentTask < mathTasks.length - 1) {
          setCurrentTask(prev => prev + 1)
          setUserAnswer('')
          setAttempts(0)
          setShowHint(false)
        }
      }
    }
  }

  const goToPreviousTask = () => {
    if (currentTask > 0) {
      setCurrentTask(prev => prev - 1)
      setUserAnswer('')
      setAttempts(0)
      setShowHint(false)
    }
  }

  // Funkcije za virtuelnu tastaturu
  const handleKeyPress = (key) => {
    setUserAnswer(prev => prev + key)
  }

  const handleBackspace = () => {
    setUserAnswer(prev => prev.slice(0, -1))
  }

  const handleClear = () => {
    setUserAnswer('')
  }

  const handleSpeakHint = () => {
    speakText(currentTaskData.hint)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-purple-800 mb-2 flex items-center justify-center gap-2">
            <Calculator className="w-8 h-8" />
            Matematika
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-6 h-6 ${i < stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <Progress value={progress} className="w-full h-3" />
          <p className="text-sm text-purple-600 mt-2">
            Zadatak {currentTask + 1} od {mathTasks.length}
          </p>
        </div>

        {/* Glavni zadatak */}
        <Card className="mb-6 shadow-lg border-2 border-purple-200">
          <CardHeader className="bg-gradient-to-r from-purple-200 to-pink-200">
            <CardTitle className="text-xl text-center text-purple-800">
              {currentTaskData.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col items-center gap-4">
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="w-32 h-12 text-2xl text-center border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none"
                placeholder="?"
              />
              <Button 
                onClick={handleAnswer}
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 text-lg"
                disabled={!userAnswer}
              >
                Provjeri
              </Button>
              
              {showHint && (
                <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-4 mt-4">
                  <div className="flex items-center justify-between">
                    <p className="text-yellow-800">
                      💡 {currentTaskData.hint}
                    </p>
                    <Button
                      onClick={handleSpeakHint}
                      variant="ghost"
                      size="sm"
                      className="ml-2"
                    >
                      <Volume2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              <VirtualKeyboard
                onKeyPress={handleKeyPress}
                onBackspace={handleBackspace}
                onClear={handleClear}
                isVisible={showKeyboard}
                onToggle={() => setShowKeyboard(!showKeyboard)}
              />
              
              <div className="flex gap-2 mt-4">
                <Button 
                  onClick={goToPreviousTask}
                  disabled={currentTask === 0}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Prethodni
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pokušaji */}
        <div className="text-center">
          <p className="text-purple-600">
            Pokušaj: {attempts + 1} od 3
          </p>
        </div>
      </div>
    </div>
  )
}

// Komponenta za čitanje
const ReadingSection = ({ onComplete, readingStory }) => {
  const [currentStory, setCurrentStory] = useState(0)
  const [showQuestions, setShowQuestions] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [highlightedWords, setHighlightedWords] = useState(false)

  const currentStoryData = readingStory
  const currentQuestionData = currentStoryData.questions[currentQuestion]

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex)
    if (answerIndex === currentQuestionData.correct) {
      setCorrectAnswers(prev => prev + 1)
      speakText('Bravo! Tačan odgovor!')
      console.log('BRAVO! Tačan odgovor! 🎉')
    } else {
      speakText('Pokušaj ponovo!')
    }
    
    setTimeout(() => {
      if (currentQuestion < currentStoryData.questions.length - 1) {
        setCurrentQuestion(prev => prev + 1)
        setSelectedAnswer(null)
      } else {
        onComplete()
      }
    }, 1500)
  }

  const handleReadStory = () => {
    speakText(currentStoryData.text)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-green-800 mb-4 flex items-center justify-center gap-2">
            <BookOpen className="w-8 h-8" />
            Čitanje
          </h1>
        </div>

        {!showQuestions ? (
          // Prikaz priče
          <Card className="mb-6 shadow-lg border-2 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-200 to-blue-200">
              <CardTitle className="text-xl text-center text-green-800">
                {currentStoryData.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                {currentStoryData.text}
              </p>
              <div className="text-center space-y-3">
                <div className="flex gap-3 justify-center">
                  <Button 
                    onClick={() => setShowQuestions(true)}
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
                  >
                    Odgovori na pitanja
                  </Button>
                  <Button 
                    onClick={handleReadStory}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Volume2 className="w-4 h-4" />
                    Čitaj priču
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          // Prikaz pitanja
          <Card className="mb-6 shadow-lg border-2 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-200 to-blue-200">
              <CardTitle className="text-xl text-center text-green-800">
                Pitanje {currentQuestion + 1} od {currentStoryData.questions.length}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">
                {currentQuestionData.question}
              </h3>
              <div className="space-y-3">
                {currentQuestionData.options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    variant={selectedAnswer === index ? "default" : "outline"}
                    className={`w-full p-4 text-left justify-start ${
                      selectedAnswer === index 
                        ? (index === currentQuestionData.correct 
                           ? 'bg-green-500 hover:bg-green-600' 
                           : 'bg-red-500 hover:bg-red-600')
                        : 'hover:bg-green-50'
                    }`}
                    disabled={selectedAnswer !== null}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

// Glavna aplikacija
function App() {
  const [currentSection, setCurrentSection] = useState('math') // 'math' ili 'reading'
  const [mathProgress, setMathProgress] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)

  // Odabir sadržaja za trenutni dan
  const today = new Date()
  const dayIndex = (today.getDate() - 1) % dailyContent.length // Koristi dan u mjesecu za odabir sadržaja
  const currentDayContent = dailyContent[dayIndex]

  const handleMathComplete = () => {
    setCurrentSection('reading')
  }

  const handleReadingComplete = () => {
    setIsCompleted(true)
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-pink-100 flex items-center justify-center p-4">
        <Card className="max-w-md mx-auto shadow-lg border-2 border-yellow-300">
          <CardContent className="p-8 text-center">
            <div className="mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400 inline-block mx-1" />
              ))}
            </div>
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">
              Čestitamo! 🎉
            </h2>
            <p className="text-lg text-yellow-700 mb-6">
              Završili ste sve zadatke za danas! Vidimo se sutra za nove avanture!
            </p>
            <Button 
              onClick={() => window.location.reload()}
              className="bg-yellow-500 hover:bg-yellow-600 text-white"
            >
              Počni ponovo
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <>
      {currentSection === 'math' && (
        <MathSection 
          onComplete={handleMathComplete}
          progress={mathProgress}
          setProgress={setMathProgress}
          mathTasks={currentDayContent.mathTasks}
        />
      )}
      {currentSection === 'reading' && (
        <ReadingSection 
          onComplete={handleReadingComplete}
          readingStory={currentDayContent.readingStory}
        />
      )}
    </>
  )
}

export default App

