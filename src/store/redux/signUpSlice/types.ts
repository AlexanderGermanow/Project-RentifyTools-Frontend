export interface UserRequestDto {
  firstname: string
  lastname: string
  email: string
  password: string
  phone: string
}

export interface UserResponseDto {
  id: string
  firstname: string
  lastname: string
  email: string
  phone: string
  roles: UserRolleProps[] //v241124 hinzugefügt
}

export interface UserInitialState {
  userObj: UserResponseDto | undefined
  isLoading: boolean
  error: string | undefined
}

//v241124 Von mir geschrieben 
export interface UserRolleProps {
  id: number
  name: string
}

