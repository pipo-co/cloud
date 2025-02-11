variable "aws_region" {
  description = "The aws regions"
  type        = string
}

variable "lambda_hashes" {
  description = "List of lambda rest configuration hash codes"
  type        = list(string)
}

variable "cognito_user_pool_name" {
  description = "Cognito user pool name"
  type        = string
}

