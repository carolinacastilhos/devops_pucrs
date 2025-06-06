provider "aws" {
  region = "us-east-1"  
}

resource "aws_instance" "nestjs_api" {
  ami           = "ami-084568db4383264d4"  
  instance_type = "t2.micro"  

  key_name = "devops-key"  
  
  vpc_security_group_ids = ["sg-0495cfe6a494275d2"]  
  subnet_id              = "subnet-025aa303ee8b1885a"  

  tags = {
    Name = "nestjs-api-instance"
  }
}