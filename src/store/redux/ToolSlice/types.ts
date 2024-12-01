export interface ToolRequestDto {
  title: string;
  description: string;
  price: string;
  imageUrls?: string[];
  status?: string;
}

export interface ToolResponseDto {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrls: string[];
  status: string;
}

export interface ToolInitialState {
  images: string[];
  tools: ToolResponseDto[];
  userTools: ToolResponseDto[];
  toolObj: ToolResponseDto | undefined;
  initialTools: ToolResponseDto[]; 
  isLoading: boolean;
  error: string | undefined;
}
