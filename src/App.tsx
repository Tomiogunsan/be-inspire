import Button from '@/Sharedcomponents/button/Button'
import Input from '@/Sharedcomponents/input/input'

function App() {
  return (
    <div>
      <Button type='button' variant='primary'>
        Click me
      </Button>
      <Button as='a' variant='link'>
        Click me
      </Button>
      <Input type='password' label='password' placeholder='Password' />
      <Input type='input' label='Email ' placeholder='Email' />
    </div>
  )
}

export default App
