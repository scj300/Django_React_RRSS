from post.serializers import UserRegistrationSerializer


def custom_jwt_response_handler(token,user=None, request=None):
    return {
        'token':token,
        'user': UserRegistrationSerializer(user,context=('request',request)).data
    }