/* eslint-disable */
<template>
<div class="card">
    <slot name="image"></slot>
    <div class="card-content">
        <div class="header">
            <h1><slot name="title"></slot></h1>
        </div>
        <div class="card-body">
            <p><slot name="content"></slot></p>
        </div>
    </div>
</div>
</template>
<style lang="scss">
.card {
    background-color: $brand;
    width: 30ch;
    border-radius: 0.5rem;
    color: $light;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    padding-top: 0rem;
    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    text-align: left;
    margin: 1rem;
    margin-top: 6rem;
    box-shadow: (4px 2px 3px rgba(0, 0, 0, 0.2));
    img {
        border-radius: 0.5rem;
        height: 15rem;
        width: 100%;
        margin-top: -2rem;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
        box-shadow: (4px 2px 3px rgba(0, 0, 0, 0.4));;
        &.contain {
            object-fit: contain;
            height: 100%;
        }
    }
    &:hover {
        background-color: lighten($brand, 5%);
        cursor: pointer;
        box-shadow: (4px 2px 3px rgba(0, 0, 0, 0.3));
        img {
            transform: scale(1.05);
        }
    }
    .card-content {
        width: 100%;
        .card-body {
            p {
                overflow: hidden;
                margin: 0;
            }
        }
    }
}

@media only screen and (min-width: 600px) {
  .card {
    width: 45ch;
    img {
      height: 25rem;
    }
  }
}
</style>
