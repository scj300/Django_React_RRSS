# Generated by Django 3.0.5 on 2020-04-11 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0015_auto_20200411_1642'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='id',
            field=models.BigAutoField(primary_key=True, serialize=False),
        ),
    ]
