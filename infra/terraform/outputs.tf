output "instance_public_ip" {
  description = "Endereço IP público da instância EC2"
  value       = aws_instance.nestjs_api.public_ip
}

output "instance_id" {
  description = "ID da instância EC2"
  value       = aws_instance.nestjs_api.id
}
