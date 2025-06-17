variable "aws_region" {
  description = "Região AWS para os recursos"
  default     = "us-east-1"
}

variable "ami_id" {
  description = "ID da AMI"
}

variable "instance_type" {
  description = "Tipo da instância EC2"
  default     = "t2.micro"
}

variable "key_name" {
  description = "Nome do par de chaves SSH"
}

variable "subnet_id" {
  description = "ID da subnet"
}

variable "security_group_id" {
  description = "ID do Security Group"
}
